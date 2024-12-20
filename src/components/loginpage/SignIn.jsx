import { Modal } from "react-bootstrap";
import { toggleModal, toggleModalSignIn, UserSignInThunk } from "../../services/action/UsersAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const SignIn = () => {
    const { isSignIn, isSignInSuc } = useSelector((state) => state.UserReducer);
    const [signIn, setSignIn] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToggleModal = () => {
        dispatch(toggleModalSignIn());
    };

    const handleSignUP = () => {
        dispatch(toggleModal());
    };

    const SignSubmit = async (e) => {
        e.preventDefault();

        const isSignedIn = await dispatch(UserSignInThunk(signIn)); 
        
        if (isSignedIn) {
            navigate("/recipeform"); 
        } else {
            alert("Invalid email or password"); 
        }
    }

    return (
        <>
            <Modal show={isSignIn} backdrop="static" keyboard={false}>
                <Modal.Header onClick={handleToggleModal} className={`py-3 px-3 flex items-center justify-center !border-b-0`}>
                    <CloseIcon className="cursor-pointer" />
                </Modal.Header>

                <Modal.Body className={`p-0 flex items-center justify-center py-3`}>
                    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

                        <form action="" className="space-y-4" onSubmit={SignSubmit}>
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                                <input type="email" id="email" name="email" value={signIn.email}  className="mt-1 w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500"  placeholder="Enter your email"  onChange={(e) => setSignIn({ ...signIn, email: e.target.value })} />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                                <input type="password" id="password" name="password" value={signIn.password}  className="mt-1 w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500"  placeholder="Enter your password"  onChange={(e) => setSignIn({ ...signIn, password: e.target.value })} />
                            </div>

                            {/* Sign In Button */}
                            <div>
                                <button type="submit"  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 outline-none"> Sign In </button>
                            </div>
                        </form>

                        {/* Forgot Password and Register */}
                        <p className="text-center text-sm text-gray-600 mt-6">
                            Don't have an account?
                            <Link onClick={handleSignUP} className="text-blue-500 hover:underline">Sign Up</Link>
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignIn;