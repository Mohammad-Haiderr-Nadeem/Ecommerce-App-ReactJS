import { useLocation, Navigate, Outlet } from "react-router";
import useAuth from '../Hooks/Hooks';

const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();
    
    return(
        auth?.email ?
        <Outlet/> :
        <Navigate to="/login" state={{from: location}} replace ></Navigate>
    );
}

export default RequireAuth;