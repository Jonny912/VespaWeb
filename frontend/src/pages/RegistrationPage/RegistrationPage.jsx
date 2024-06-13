import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
    return (
        <section className={styles.reg_section}>
   <RegistrationForm/>
   </section>
    )
}

export default RegistrationPage;