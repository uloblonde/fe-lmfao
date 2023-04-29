import {useContext} from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export function PrivateRouteLogin(){
    const [state] = useContext(UserContext)
    console.log(state.user.role)

    if (!state.isLogin){
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
}
export const PrivateRouteUser = () =>{
    const [state] = useContext(UserContext)

    if(state.user.role === "admin"){
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
}
export const PrivateRouteAdmin = () =>{
    const [state] = useContext(UserContext)

    if (state.user.role !== "admin"){
        return <Navigate to={"/Admintable"}/>
    }
    return <Outlet/>
}