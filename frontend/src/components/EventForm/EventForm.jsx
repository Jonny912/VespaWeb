import styles from './EventForm.module.css';
import Button from '../Button/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useAddEventMutation } from '../../redux/eventsAPI';
import { useSelector } from 'react-redux';

const EventForm = ({handleCloseModal}) => {
    const [formData, setFormData] = useState({name:"", description: "", type:"",
         date: {year:"", month:"", date:"",day:""},
        time: {hours:"", minutes:""}});
    const [startDate, setStartDate] = useState(new Date());
    const [addEvent] = useAddEventMutation();
    const token = useSelector(state => state.authReducer.token);

    const handleInputChange = (evt) => {
        setFormData(prevState => ({...prevState, [evt.target.name]: evt.target.value}))
        console.log(formData)
    }

    const handleSubmitForm = async (evt) => {
        evt.preventDefault();
        // setFormData(
        //     {name: evt.currentTarget.elements.name.value,
        //      type: evt.currentTarget.elements.type.value,
        //       date: startDate})
       await addEvent({body: {...formData}, token}).unwrap();
        handleCloseModal()
       

    }

    const handleDateSelect = (date) => {
        setFormData(prevState => {console.log(date.getDay()) 
            return ({...prevState, date: {
            year:date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            day:  date.getDay()
        }, time: {
            hours: date.getHours(),
            minutes: date.getMinutes()
        }})})


    } 
    return (
        <form onSubmit={handleSubmitForm} className={styles.event_form}>
            <div className={styles.inputs_wrapper}>
                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="name">Event name</label>
                    <input onChange={handleInputChange} className={styles.input} type="text" id='name' name='name' value={formData.name} placeholder='My new event'/>
                    </div>
                    <div className={styles.input_wrapper}>
                        <label className={styles.label} htmlFor="select">Select event type</label>
                   <select onChange={handleInputChange} className={styles.select} name="type" id="select">
                    <option value="Webinar">Webinar</option>
                    <option value="Online-session">Online-session</option>
                    <option value="Virtual summit">Virtual summit</option>
                    <option value="Online-exebition">Online-exebition</option>
                    <option value="Online-training">Online-training</option>
                    <option value="Online-course">Online-course</option>
                   </select>
                   </div>
                   <div className={styles.input_wrapper_date}>
                   <label className={styles.label} htmlFor="select">Select date</label>
                   <DatePicker selected={startDate}
                    onSelect={handleDateSelect}
                     showTimeSelect
                     timeFormat="HH:mm"
                     timeIntervals={15}
                     timeCaption="time"
                     dateFormat="MMMM d, yyyy h:mm aa"
                   className={styles.date}  onChange={(date) => setStartDate(date)} />
                   </div>
                   <label className={styles.label} htmlFor="descr">Event description</label>
                   <textarea value={formData.description} onChange={handleInputChange} className={styles.textarea} name="description" id="descr"></textarea>
            </div>

           <Button type="submit" styles={{padding: "16px 16px", color: "white", border: "none", fontSize: "24px", borderRadius:"8px"}}>Create</Button>
        </form>
    )
}

export default EventForm;