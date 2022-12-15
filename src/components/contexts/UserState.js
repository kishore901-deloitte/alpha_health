import React, {useContext, useState} from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    return <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
        {props.children}
    </UserContext.Provider>
}

export default UserState;