import styles from './TotalEventsList.module.css';
import { useGetTotalEventsQuery } from '../../redux/eventsAPI';
import TotalEvensItem from '../TotalEventsItem/TotalEventsItem';


const TotalEventsList =  () => {
    


    const {isFetching, currentData, isSuccess} = useGetTotalEventsQuery();



    return (
        <>
     
        <ul className={styles.event_list}>
        {isSuccess && currentData.data.map((event) => {
            return <TotalEvensItem key={event._id} {...event}/>
        })}
    </ul>
    </>
    )
}

export default TotalEventsList;