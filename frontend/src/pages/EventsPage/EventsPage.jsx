import TotalEventList from '../../components/TotalEventsList/TotalEventsList';
import styles from './EventsPage.module.css';
import { useGetTotalEventsQuery } from '../../redux/eventsAPI';

const EventsPage = () => {
    const {isFetching} = useGetTotalEventsQuery();
    return (
        <section className={styles.events_section}>
<h1 className={styles.events_title}>Available upcomming events</h1>
{isFetching ? <p className={styles.loader}>Loading...</p> : <TotalEventList/>}

        </section>
    )
}

export default EventsPage;