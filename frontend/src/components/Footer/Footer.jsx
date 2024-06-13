import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
             <Link to="/" className={styles.logo_link}>Meet Me</Link>
        </footer>
    )
}

export default Footer;