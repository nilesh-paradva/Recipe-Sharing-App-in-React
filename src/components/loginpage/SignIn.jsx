import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecipeVideo from "../../assets/video/RecipeSignIn.mp4";

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [SignIn, setSignIn] = useState({
        email: "",
        password: "",
    })

    const handleSignIn = (e) => {
        e.preventDefault();
        // dispatch(UserSignUp(SignUp));
        console.log(SignIn);
    }

    return (
        <>
            <div className="relative min-h-screen">
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={RecipeVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
                    <div className="w-full max-w-md p-8 space-y-6 bg-[#333232] bg-opacity-70 rounded-lg shadow-2xl border-3 border-[#4a4949]">
                        <h2 className="text-2xl font-bold text-center text-white">Sign In</h2>
                        <form className="space-y-4" onSubmit={handleSignIn}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white">Email Address*</label>
                                <input type="email" id="email" autoComplete="email" name="email" value={SignIn.email} placeholder='Enter your Email' required className="w-full bg-[rgba(84,78,78,0.4)] text-white placeholder:text-[#aca7a7] px-3 py-2 mt-1 rounded-lg shadow-sm focus:!ring-2 focus:!ring-blue-500 outline-none" onChange={(e) => setSignIn({ ...SignIn, email: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-white">Password*</label>
                                <input type="password" id="password" autoComplete="current-password" name="password" value={SignIn.password} placeholder='Enter your Password' required className="w-full bg-[rgba(84,78,78,0.4)] text-white placeholder:text-[#aca7a7] px-3 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:!ring-2 focus:ring-blue-500 focus:outline-none" onChange={(e) => setSignIn({ ...SignIn, password: e.target.value })} />
                            </div>
                            <div>
                                <button type="submit" className="w-full px-3 py-2 mt-1 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">Sign In</button>
                            </div>
                        </form>
                        <p className="text-sm text-center text-white">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;