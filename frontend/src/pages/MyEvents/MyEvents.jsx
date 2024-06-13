import { useState } from 'react';
import Button from '../../components/Button/Button';
import EventList from '../../components/EventList/EventList';
import styles from './MyEvents.module.css';
import Modal from '../../components/Modal/Modal';
import EventForm from '../../components/EventForm/EventForm';
import { useGetEventsQuery } from '../../redux/eventsAPI';
import { useSelector } from 'react-redux';


const UpcomingEventsPage = () => {

const token = useSelector(state => state.authReducer.token)
const { currentData} =  useGetEventsQuery(token, {});
const [isEventsAvailable] = useState(currentData);

    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddEvent = () => {
        setIsModalOpen(true)
        document.body.addEventListener('keydown', handleEscPress)
    }

    const  handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.removeEventListener('keydown', handleEscPress);
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
    return (
        <section className={styles.myEvents_section}>
            <div className={styles.wrapper}>
            <h1 className={styles.page_title}>My events</h1>
            <Button onClick={handleAddEvent}   type="button" title="Create event" styles={{width: "44px", height: "44px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", border: "none", fontSize: "28px", borderRadius:"50%", marginLeft: "auto"}}>+</Button>
            </div>
            {isEventsAvailable?.length &&
            <div className={styles.events_wrapper}>
                <p className={styles.noEvents_text}>You don't have any events now.</p>
                <p className={styles.noEvents_text}>Please press the button above to create a new event!</p>
            </div>
             }
        {isModalOpen && <Modal onBackdroppClick={handleModalBackdropClick}>
            <EventForm handleCloseModal={handleCloseModal}/>
            </Modal>} 
          <EventList/>
        </section>
    )
}

export default UpcomingEventsPage;

