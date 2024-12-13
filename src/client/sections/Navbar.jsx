import React from 'react'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const [loggedIn,setLoggedIn] = useState(false);
    const profilePicture = ""
    const onClickLogin = () => {
        setLoggedIn(true);
        //navigate("/login")
    }
    const onClickHome = () => {
        navigate("/")
    }
    const onClickEvent = () => {
        navigate("/create-event")
    }
    const onClickProfile = () => {
        navigate("/profile")
    }
    const onClickLogout = () =>{
        setLoggedIn(false);
    }
    return (
        <nav className="flex items-center justify-between p-9">
            <img className="h-8" alt="logo" src="/assets/images/logo.svg"/>
            {loggedIn? (
                <>
                    <div className="flex align-center space-x-10">
                        <button onClick={onClickHome}>Home</button>
                        <button onClick={onClickEvent}>Create Event</button>
                        <button onClick={onClickProfile}>My Profile</button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            onClick={onClickProfile}
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src={profilePicture}
                            alt="Profile"
                        />

                        <button
                            onClick={onClickLogout}
                            className="text-red-500 hover:underline"
                        >
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <button onClick={onClickLogin} className="bg-primary rounded-3xl px-5 py-1.5 text-white">Login</button>
            )}
        </nav>
    )
}
export default Navbar;