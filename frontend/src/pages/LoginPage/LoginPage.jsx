import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    return (
  <section className={styles.login_section}>
    <LoginForm/>
  </section>
    )
}

export default LoginPage;