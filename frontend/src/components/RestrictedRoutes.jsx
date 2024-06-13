import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const RestrictedRoutes = ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
return isLoggedIn ? <Navigate to={redirectTo}/> : Component




}

export default RestrictedRoutes;