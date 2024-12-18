import React from 'react'
import {useContext} from "react";
import {useNavigate} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext.jsx";
const LoginRoute = () => {
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center  h-screen">
            <div className="flex flex-col p-10 shadow-2xl rounded-3xl min-w-[400px]">
                <img className="w-25 h-7" alt="logo" src="/assets/images/logo.svg"/>
                <h1 className="font-bold text-[30px] my-[13px]">Login</h1>
                <span>to continue to Evently</span>
                <div className="flex flex-col gap-4 mt-4 mb-4">
                    <div className="flex flex-col">
                        <label className="text-[#003049] font-bold text-[14px]" htmlFor="email">Username</label>
                        <input className="bg-[#f4f4f8] rounded px-[15px] py-[9px]" id="email" type="text"
                               placeholder="Enter username"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#003049] font-bold text-[14px]" htmlFor="pass">Password</label>
                        <input className="bg-[#f4f4f8] rounded px-[15px] py-[9px]" id="pass" type="password"
                               placeholder="Password"/>
                    </div>
                </div>
                <button className="bg-primary rounded my-4 px-[15px] py-[9px] text-white">Login</button>
                <div className="flex space-x-[5px] items-center">
                    <p>New to Evently?</p>
                    <button className="text-primary font-medium" onClick={() => navigate('/signup')}>Sign up</button>
                </div>
            </div>
        </div>
    )
}
export default LoginRoute;