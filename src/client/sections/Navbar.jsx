import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const onClickLogin = () => {
        navigate("/login")
    }
    return (
        <nav className="flex items-center justify-between p-9">
            <img className="h-8" alt="logo" src="/assets/images/logo.svg" />
            <button onClick={onClickLogin} className="bg-primary rounded-3xl px-5 py-1.5 text-white">Login</button>
        </nav>
    )
}

export default Navbar;
