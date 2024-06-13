
import styles from './Modal.module.css';

const Modal = ({children, onBackdroppClick}) => {
    return (
        <div onClick={(evt) => {onBackdroppClick(evt)}} className={styles.backdrop}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    )
}

export default Modal;