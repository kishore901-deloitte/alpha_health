import {useContext} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import UserContext from '../components/contexts/UserContext'

const ProtectedRoutes = () => {
    const {isLoggedIn} = useContext(UserContext)
    // Allow only loggedIn users
    return (isLoggedIn ? <Outlet/> : <Navigate to='/'/>)
}

export default ProtectedRoutes