import { useEffect, useState } from "react";
import RecipeVideo from "../../assets/video/Recipe.mp4";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserSignUp } from "../../services/action/AuthAction";

const SignUp = () => {
    const { isCreated, error } = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [SignUp, setSignUp] = useState({
        name: "",
        email: "",
        password: "",
        c_password: ""
    });

    const handleSignUp = (e) => {
        e.preventDefault();
        if (SignUp.password !== SignUp.c_password) {
            alert("Passwords do not match");
            return;
        }
        // if (!SignUp.name || !SignUp.email || !SignUp.password) {
        //     alert("Please fill in all fields");
        //     return;
        // }
        dispatch(UserSignUp(SignUp));
    };

    useEffect(() => {
        if (isCreated) {
            alert("Sign Up Successful! Redirecting to Sign In");
            navigate("/SignIn");
        }
    }, [isCreated]);

    return (
        <div className="relative min-h-screen">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src={RecipeVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-[#333232] bg-opacity-70 rounded-lg shadow-2xl">
                    <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="name" className="block text-sm text-white mb-1">Full Name*</label>
                            <input type="text" id="name" value={SignUp.name}  onChange={(e) => setSignUp({ ...SignUp, name: e.target.value })}  placeholder='Enter your Name' className="w-full p-2 bg-gray-700 text-white rounded outline-none focus:!ring-2 focus:!ring-blue-500 " />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-white mb-1">Email Address*</label>
                            <input type="email" id="email" value={SignUp.email}  onChange={(e) => setSignUp({ ...SignUp, email: e.target.value })}  placeholder='Enter your Email' className="w-full p-2 bg-gray-700 text-white rounded outline-none focus:!ring-2 focus:!ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm text-white mb-1">Password*</label>
                            <input type="password" id="password" value={SignUp.password}  onChange={(e) => setSignUp({ ...SignUp, password: e.target.value })}  placeholder='Enter your Password' className="w-full p-2 bg-gray-700 text-white rounded outline-none focus:!ring-2 focus:!ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="c_password" className="block text-sm text-white mb-1">Confirm Password*</label>
                            <input type="password" id="c_password" value={SignUp.c_password}  onChange={(e) => setSignUp({ ...SignUp, c_password: e.target.value })}  placeholder='Confirm your Password' className="w-full p-2 bg-gray-700 text-white rounded outline-none focus:!ring-2 focus:!ring-blue-500" />
                        </div>
                        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Sign Up</button>
                    </form>
                    <p className="text-sm text-center text-white">Already have an account? <Link to="/SignIn" className="text-blue-400">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;