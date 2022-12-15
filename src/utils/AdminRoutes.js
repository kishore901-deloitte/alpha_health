import {useContext, useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import UserContext from '../components/contexts/UserContext'

const AdminRoutes = () => {
    const {user} = useContext(UserContext)
    if(user.role !== "admin"){
        toast.error("Sorry you are not admin")
    }
    // console.log(user);
    // Allow only loggedIn users
    return (user.role === "admin" ? <Outlet/> : <Navigate to='/'/>)
}

export default AdminRoutes