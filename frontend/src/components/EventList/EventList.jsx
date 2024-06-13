import styles from './EventList.module.css';
import { useGetEventsQuery } from '../../redux/eventsAPI';
import { useSelector } from 'react-redux';
import EventItem from '../EventItem/EventItem';

const EventList = () => {
    const token = useSelector(state => state.authReducer.token)
const {isFetching, currentData, isSuccess} =  useGetEventsQuery(token, {});



    
    return (
        <>
        {isFetching && <h1>I am loading</h1>}
        <ul className={styles.event_list}>
            {isSuccess && currentData.data.map((event) => {
                return <EventItem key={event._id} {...event}/>
            })}
        </ul>
        </>
    )
}

export default EventList;