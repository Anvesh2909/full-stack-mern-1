import React from 'react'

const LoginRoute = () => {
    return (
        <div className="flex justify-center items-center  h-screen">
            <div className="flex flex-col p-10 shadow-2xl rounded-3xl">
                <img className="w-25 h-7" alt="logo" src="/assets/images/logo.svg"/>
                <h1>Sign in</h1>
                <span>to continue to Evently</span>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <label>Email address</label>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Password</label>
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                <button className="bg-primary rounded-xl px-2 py-1 text-white">Sign in</button>
                <p>No account? <span>Sign up</span></p>
            </div>
        </div>
    )
}
export default LoginRoute