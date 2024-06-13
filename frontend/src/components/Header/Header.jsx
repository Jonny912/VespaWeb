import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {useUserLogoutMutation} from './../../redux/userAPI'
import {setIsLoggedIn, setUser} from './../../redux/authSlice'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [userLogout] = useUserLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.authReducer.user);

    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
    const handleLogout = async () => {
      await  userLogout(JSON.parse(localStorage.getItem('token')))  
      dispatch(setIsLoggedIn(false))
      dispatch(setUser(null))
      localStorage.clear()
      navigate('/')
    }
    return (
        <header className={styles.header}>

            <Link to="/" className={styles.logo_link}>Meet Me</Link>
            <nav className={styles.nav}>
                <ul  className={styles.main_nav}>
                <li>
                     <NavLink className={({isActive}) => isActive ? styles.active : styles.link} to="/about">About</NavLink>
                 </li>
                 <li>
                     <NavLink className={({isActive}) => isActive ? styles.active : styles.link} to="/products">Products</NavLink>
                 </li>
                <li>
                     <NavLink className={({isActive}) => isActive ? styles.active : styles.link} to="/events">Events</NavLink>
                 </li>
                 <li>
                     <NavLink className={({isActive}) => isActive ? styles.active : styles.link} to="/support">Support</NavLink>
                 </li>
                </ul>
            {isLoggedIn ?
             <ul className={styles.user_nav}>
             <li>
                     <NavLink className={({isActive}) => isActive ? styles.active : styles.link} to="/myevents">My events</NavLink>
                 </li>
                 <li>
                     <NavLink className={({isActive}) => isActive ? styles.active : styles.link} to="/profile">Profile</NavLink>
                 </li>
             </ul>
             :
             <div className={styles.empty_wrapper}></div>
            }
            <div className={styles.wrapper}>
            {user?.username && <p className={styles.username}>Welcome, {user.username}</p>}
                <ul className={styles.auth_nav}>
                    <li className={styles.auth_nav_item}>
                        <Link to={!isLoggedIn && '/login'} onClick={isLoggedIn ? handleLogout  : null} className={styles.auth_nav_link}>{isLoggedIn ? 'Log out' : 'Log in'}</Link>
                    </li>
             { !isLoggedIn &&     <li className={styles.auth_nav_item}>
                        <Link to="/registration" className={styles.auth_nav_link}>Register</Link>
                    </li>}
                </ul>
                </div> 
            </nav>
        </header>
    )
}

export default Header;