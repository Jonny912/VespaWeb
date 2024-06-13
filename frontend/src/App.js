import './App.css';
import {lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RestrictedRoutes from './components/RestrictedRoutes';



const Home = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(()=> import('./pages/LoginPage/LoginPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const UpcomingEventsPage = lazy(() => import('./pages/MyEvents/MyEvents'));
const EventsPage = lazy(()=> import('./pages/EventsPage/EventsPage'));
const SupportPage = lazy(() => import('./pages/SupportPage/SupportPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ProductPage = lazy(() => import('./pages/ProductsPage/ProductsPage'))



function App() {

  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='registration' element={<RestrictedRoutes redirectTo='/profile' component={<RegistrationPage/>}/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='events' element={<EventsPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path='myevents' element={<UpcomingEventsPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='products' element={<ProductPage/>}/>
          <Route path='support' element={<SupportPage/>}/>
          
        </Route>
      </Routes>

     
    </div>
    </Router>
  );
}

export default App;
