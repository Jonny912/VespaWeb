import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Suspense } from 'react';


const Layout = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Suspense fallback={<p className={styles.loader}>Loading</p>}>
            <Outlet/>
            </Suspense>
            <Footer/>
        </div>

    )
}

export default Layout;