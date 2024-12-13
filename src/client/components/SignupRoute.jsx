import {useNavigate} from "react-router-dom";
const SignupRoute = () => {
     const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center  h-screen">
            <div className="flex flex-col p-10 shadow-2xl rounded-3xl min-w-[400px]">
                <img className="w-25 h-7" alt="logo" src="/assets/images/logo.svg"/>
                <h1 className="font-bold text-[30px] my-[13px]">Sign Up</h1>
                <span>to continue to Evently</span>
                <div className="flex flex-col gap-4 mt-4 mb-4">
                    <div className="flex flex-col">
                        <label className="text-[#003049] font-bold text-[14px]" htmlFor="username">Username</label>
                        <input className="bg-[#f4f4f8] rounded px-[15px] py-[9px]" id='username' type="username"
                               placeholder="Enter username"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#003049] font-bold text-[14px]" htmlFor="email">Email address</label>
                        <input className="bg-[#f4f4f8] rounded px-[15px] py-[9px]" id="email" type="email"
                               placeholder="Email"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#003049] font-bold text-[14px]" htmlFor="pass">Password</label>
                        <input className="bg-[#f4f4f8] rounded px-[15px] py-[9px]" id="pass" type="password"
                               placeholder="Password"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#003049] font-bold text-[14px]" htmlFor="confirmPass">Confirm
                            Password</label>
                        <input className="bg-[#f4f4f8] rounded px-[15px] py-[9px]" id="confirmPass" type="password"
                               placeholder="Confirm Password"/>
                    </div>
                </div>
                <button className="bg-primary rounded my-4 px-[15px] py-[9px] text-white">Sign in</button>
                <div className="flex space-x-[5px] items-center">
                    <p>Already a user?</p>
                    <button className="text-primary font-medium" onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default SignupRoute;