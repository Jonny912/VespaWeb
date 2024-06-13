import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({component: Component, redirectTo='/'}) => {
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    const shouldRedirect = !isLoggedIn;
    return shouldRedirect ? <Navigate to={redirectTo}/> : Component;
}

export default PrivateRoutes;