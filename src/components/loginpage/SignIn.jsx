import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { closeSign, GetUsersThunk, SignInPopup, UserSignIn } from "../../services/action/AuthAction";
import RecipeVideo from "../../assets/video/RecipeSignIn.mp4";
import { Button } from "@mui/material";
import GoogleIcon from "../../assets/images/auth/google.png"

const SignIn = () => {
    
    const { error, isSignIn, isLoading, user } = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [SignIn, setSignIn] = useState({
        email: "",
        password: ""
    });

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(UserSignIn(SignIn));
    };

    const SignInGoogle = () => {
        dispatch(SignInPopup());
    }

    useEffect(() => {
        dispatch(GetUsersThunk());
    }, []);


    useEffect(() => {
        if (isSignIn) {
            navigate("/");
        }
        dispatch(closeSign())
    }, [isSignIn, dispatch, user]);

    return (
        <div className="relative min-h-screen">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src={RecipeVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-[#333232] bg-opacity-70 rounded-lg shadow-2xl">
                    <h2 className="text-2xl font-bold text-center text-white">Sign In</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSignIn}>
                        <div>
                            <label htmlFor="email" className="block text-sm text-white mb-1">Email Address*</label>
                            <input type="email" id="email" value={SignIn.email} onChange={(e) => setSignIn({ ...SignIn, email: e.target.value })} placeholder={user ? user.email : "Enter your Email Address"} className="w-full p-2 bg-gray-700 text-white rounded outline-none focus:!ring-2 focus:!ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm text-white mb-1">Password*</label>
                            <input type="password" id="password" value={SignIn.password} onChange={(e) => setSignIn({ ...SignIn, password: e.target.value })} placeholder='Enter your Password' className="w-full p-2 bg-gray-700 text-white rounded outline-none focus:!ring-2 focus:!ring-blue-500" />
                        </div>
                        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">{isLoading ? "Signing In..." : "Sign In"}</button>
                    </form>
                    <p className="text-sm text-center text-white">Don't have an account? <Link to="/SignUp" className="text-blue-400">Sign Up</Link></p>
                    <div className="signWithGoogle text-center">
                        <Button variant="text" className="text-capitalize text-white hover:!bg-[rgba(65,64,64,0.7)] !rounded-lg px-3 py-2" onClick={SignInGoogle}>
                            <span className="pe-2"><img src={GoogleIcon} alt="googleicon" className="img-fluid w-8" /></span>Sign With Google
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;