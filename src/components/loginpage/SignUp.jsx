import { useEffect, useState } from "react";
import RecipeVideo from "../../assets/video/Recipe.mp4"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSignUp } from "../../services/action/SignUpAction";

const SignUp = () => {

    const { isCreated } = useSelector((state) => state.SignUpReducer);
    console.log("user get", isCreated);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [SignUp, setSignUp] = useState({
        name: "",
        email: "",
        password: "",
        c_password: ""
    })

    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(UserSignUp(SignUp));
        console.log(SignUp);
    }

    useEffect(() => {
        if (isCreated) {
            navigate("/SignIn");
        }
    }, [isCreated])

    return (
        <div className="relative min-h-screen">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src={RecipeVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-6 bg-[#333232] bg-opacity-70  rounded-lg shadow-2xl border-3 border-[#4a4949]">
                    <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">Full Name*</label>
                            <input type="text" id="name" name="name" autoComplete="name" value={SignUp.name} placeholder='Enter your Name' required className="w-full bg-[rgba(84,78,78,0.4)] text-white placeholder:text-[#aca7a7] px-3 py-2 mt-1 border-gray-300 rounded-lg  shadow-sm focus:!ring-2 focus:ring-blue-500 focus:outline-none" onChange={(e) => setSignUp({ ...SignUp, name: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email Address*</label>
                            <input type="email" id="email" name="email" autoComplete="email" value={SignUp.email} placeholder='Enter your Email' className="w-full bg-[rgba(84,78,78,0.4)] text-white placeholder:text-[#aca7a7] px-3 py-2 mt-1  rounded-lg shadow-sm focus:!ring-2  focus:!ring-green-500 outline-none" onChange={(e) => setSignUp({ ...SignUp, email: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">Password*</label>
                            <input type="password" id="password" name="password" autoComplete="password" value={SignUp.password} placeholder='Enter your Password' className="w-full bg-[rgba(84,78,78,0.4)] text-white placeholder:text-[#aca7a7] px-3 py-2 mt-1 border-gray-300 rounded-lg  shadow-sm focus:!ring-2 focus:ring-green-500 focus:outline-none" onChange={(e) => setSignUp({ ...SignUp, password: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="C_password" className="block text-sm font-medium text-white">Conform Password*</label>
                            <input type="password" id="C_password" name="c_password" autoComplete="c_password" value={SignUp.c_password} placeholder='Enter your Conform Password' className="w-full bg-[rgba(84,78,78,0.4)] text-white placeholder:text-[#aca7a7] px-3 py-2 mt-1 border-gray-300 rounded-lg  shadow-sm focus:!ring-2 focus:ring-green-500 focus:outline-none" onChange={(e) => setSignUp({ ...SignUp, c_password: e.target.value })} />
                        </div>
                        <div>
                            <button type="submit" className="w-full  px-3  py-2 mt-1 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-sm text-center text-[white]">Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;