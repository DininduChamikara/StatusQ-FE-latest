import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { showAlert } from "../../store/reducers/alert.slice";
import { store } from "../../store/store";

const NORMAL_USER = "NORMAL_USER";
const ADMIN_USER = "ADMIN_USER";

const ERROR_MESSAGE = "You are not authorized to that page";

// check whether the user is logged into the system
const ProtectedRoute = ({children}) => {
    const userInfo = useSelector((state) => state.login);
    const [shouldReturn, setShouldReturn] = useState(false);

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    useEffect(() => {
        if (!isLoggedIn){
            store.dispatch(
                showAlert({
                    message: "Please login to the system",
                    isVisible: true,
                    severity: "warning",
                })
            );
            setShouldReturn(true);
        }
    }, [userInfo, isLoggedIn]);
    if(shouldReturn){
        return <Navigate to="/login" replace />
    }
    return children;
};

export const NormalUserProtectedRoute = ({children}) => {
    const userType = useSelector((state) => state.login.userType);
    if (userType !== NORMAL_USER){
        store.dispatch(
            showAlert({
                message: ERROR_MESSAGE,
                isVisible: true,
                severity: "warning",
            })
        );
        return <Navigate to="/login" replace />
    }
    return children;
};

export const AdminUserProtectedRoute = ({children}) => {
    const userType = useSelector((state) => state.login.userType);
    if (userType !== ADMIN_USER){
        store.dispatch(
            showAlert({
                message: ERROR_MESSAGE,
                isVisible: true,
                severity: "warning",
            })
        );
        return <Navigate to="/login" replace />
    }
    return children;
};

export default ProtectedRoute;