import { useState } from 'react';
import Button from '../Button/Button';
import styles from './RegistrationForm.module.css';
// import userRegister from '../../services/AuthAPI/UserRegister';
import Modal from '../Modal/Modal';
import RegisterNotification from '../RegisterNotification/RegisaterNotification';
import {useUserRegisterMutation} from './../../redux/userAPI';
import { useNavigate } from 'react-router-dom';

const patterns = {
    email: /^(?=.*[a-z, A-Z]).{1,}@[a-z]{1,}\.(com|ua|dp|uk)$/
}

const RegistrationForm = () => {
    const [formData, setFormData] = useState({username:"", email:"", password: ""});
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false)
    const[disabled, setDisabled] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [userRegister, {isError}] = useUserRegisterMutation();
    const navigate = useNavigate();

  
   const  handleCloseModal = () => {
      setIsModalOpen(false);
      document.body.removeEventListener('keydown', handleEscPress);
      navigate('/');

    }

   const handleModalBackdropClick = (evt) => {
if(evt.currentTarget === evt.target) {
    handleCloseModal()
}
   }
   const handleEscPress = (evt) => {
    if(evt.code === 'Escape'){
        handleCloseModal();
    }
   }

   const handleOpenModal = () => {
    setIsModalOpen(true)
    document.body.addEventListener('keydown', handleEscPress)
   }

    const handleInputChange = (evt) => {
        if(formData.username &&
            formData.email && 
            formData.password &&
            patterns.email.test(formData.email)){
            setDisabled(false)
        } 
        if(!formData.username ||
            !formData.email ||
            !formData.password ||
            !patterns.email.test(formData.email)) {

            setDisabled(true)
        }
        setFormData({...formData, [evt.target.name]: evt.target.value})
        if(evt.target.name === "username" && evt.target.value.length < 2){
            setNameError(true)
            setDisabled(true)
        } else {
            setNameError(false)
         }

        if(evt.target.name === "email" && !patterns.email.test(evt.target.value))  {
            setEmailError(true)
            setDisabled(true)
        }   else{
            setEmailError(false)
        }

        if(evt.target.name === "password" && evt.target.value.length < 6){
            setPasswordError(true)
            setDisabled(true)
        } else {
            setPasswordError(false)
        }
    }

    const handleFormSubmit = async (evt) => {
        evt.preventDefault();
        try{
        await userRegister(formData).unwrap();
        handleOpenModal()
        setUserName(formData.username)
        setDisabled(true)
        setFormData({username:"", email:"", password: ""})

        // const response = await userRegister(formData);
        // const data = await response.json()  
        // console.log(data);
        // handleOpenModal()
        // setUserName(formData.username)
        // setDisabled(true)
        // setFormData({username:"", email:"", password: ""})
        }
        catch(error){
            console.log(error.message)
        }
    }

    return (
        <div>
    <form onSubmit={handleFormSubmit} className={styles.reg_form}>
       <div className={styles.inputs_wrapper}>
        <div className={styles.input_wrapper}>
            <label htmlFor="name" className={styles.label}>
                Name
            </label>
            <input onChange={handleInputChange} type='text' className={styles.input} placeholder='Enter your name' id='name' name='username' value={formData.username}/>
       {nameError && <p className={styles.validation_error}>Name should be at least 2 characters</p>}
        </div>
        <div className={styles.input_wrapper}>
            <label htmlFor="email" className={styles.label}>
                Email
            </label>
            <input onChange={handleInputChange} type='text' className={styles.input} placeholder='Enter your email' id='email' name='email'value={formData.email}/>
            {emailError && <p className={styles.validation_error}>At least one character, "@" , includes .com, .ua, .dp, .uk </p>}
        </div>
        <div className={styles.input_wrapper}>
            <label htmlFor="password" className={styles.label}>
                Password
            </label>
            <input onChange={handleInputChange} type='text' className={styles.input} placeholder='Make up a password' id='password' name='password' value={formData.password}/>
            {passwordError && <p className={styles.validation_error}>Password should be at least 6 characters</p>}
        </div>
       </div>
       <Button  disabled={disabled} type="submit" styles={{padding: "16px 32px", color: "white", border: "none", fontSize: "24px", borderRadius:"8px"}}>Register</Button>
    </form>
   {isModalOpen && 
   <Modal onBackdroppClick={handleModalBackdropClick}>
    <RegisterNotification onClick={handleCloseModal}  text={`Greate job, ${userName}! Check your email to complete the registration!`}/>
    </Modal>}
    </div>
    )
}

export default RegistrationForm;