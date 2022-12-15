import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import UserContext from "./contexts/UserContext";

const Navbar = () => {
    const {setIsLoggedIn, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser({})
        navigate('/')
    }
  return (
    <div className="w-full items-center flex px-40 py-4 shadow-md sticky top-0 bg-white">
      <div className="w-3/4 text-xl font-semibold">Mojo Health</div>
      <div className="flex w-1/4 justify-between items-center">
        <div>Something</div>
        <div>Something</div>
        <div><button onClick={handleLogout} className="px-6 py-2 bg-red-400 rounded-md text-white">Log out</button></div>
      </div>
    </div>
  );
};

export default Navbar;
