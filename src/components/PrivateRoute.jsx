import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = ({isAuth}) => {
    return isAuth ? <Outlet/> : <Navigate to="/signIn"/> 
}