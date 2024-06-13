import Button from '../Button/Button';
import styles from './RegisterNotification.module.css';

const RegisterNotification = ({text, onClick}) => {
return (
    <div className={styles.wrapper}>
        <p className={styles.notif_text}>{text}</p>
        <Button onClick={onClick} type="button" styles={{width: "180px", padding: "12px 24px", color: "white", border: "none", fontSize: "24px", borderRadius:"8px", cursor: "pointer"}}>Got it</Button>
    </div>
)
}

export default RegisterNotification;