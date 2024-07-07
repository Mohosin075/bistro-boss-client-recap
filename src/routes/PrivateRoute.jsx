import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h2 className="text-5xl">page loading</h2>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from : location} } replace></Navigate>
};

export default PrivateRoute;