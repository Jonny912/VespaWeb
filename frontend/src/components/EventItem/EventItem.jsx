import styles from './EventItem.module.css';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useDeleteEventMutation } from '../../redux/eventsAPI';
import { useSelector } from 'react-redux';




const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decembre"
]

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"

]

const EventItem = ({name, type, date, description, time, _id}) => {
    console.log(_id)

    const token = useSelector(state => state.authReducer.token)
    const [deleteEvent] = useDeleteEventMutation();

    const handleDeleteEvent = async () => {
   await deleteEvent({id:_id, token})
    }
  
    return (
        <li className={styles.event_item}> 
            <MdOutlineDelete title='Delete event' onClick={handleDeleteEvent} className={styles.delete_btn}/>
            <CiEdit title='Edit event' className={styles.edit_icon}/>
            <div> 
            <h2 className={styles.event_title}>{name}</h2>
            <p className={styles.event_type}>{type}</p>
            <p className={styles.event_descr}>{description}</p>
            </div>
            <p className={styles.date}><span>{days[date.day]}</span><span className={styles.span_wrapper}><span>{date.date.toString().padStart(2,"0")}</span><span>{month[date.month]}</span><span>{date.year}</span> <span className={styles.time_wrapper}><span>{time.hours}</span>:<span>{String(time.minutes).padStart(2,"0")}</span></span>  </span></p>
        </li>
    )
}

export default EventItem;