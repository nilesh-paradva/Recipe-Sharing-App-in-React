import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { SignUpThunk, toggleModal, toggleModalSignIn } from '../../services/action/UsersAction';
import { Link, useNavigate } from 'react-router-dom';
// import { toggleModal } from '../../services/action/RecipeAction';
// import { openModal, closeModal } from '../../services/action/HeaderAppActions';

const SignUp = () => {
    const { isSignUp, isCreated } = useSelector((state) => state.UserReducer);
    console.log("iscreated", isCreated);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signIn, setSignIn] = useState({
        Name: '',
        Email: '',
        Password: ''
    });

    const handleToggleModal = () => {
        dispatch(toggleModal());
    };

    const SignIn = (e) => {
        e.preventDefault();
        dispatch(SignUpThunk(signIn));
        setSignIn({
            Name: '',
            Email: '',
            Password: ''
        })
        console.log("sign form ", signIn);
    }

    const handleSignIn = () => {
        dispatch(toggleModalSignIn());
    };

    useEffect(() => {
        if(isCreated){
            navigate('/recipeform');
        }
    },[isCreated])

    return (
        <>
            <Modal show={isSignUp} backdrop="static" keyboard={false}>
                <Modal.Header
                    onClick={handleToggleModal}
                    className={`py-3 px-3 flex items-center justify-center !border-b-0`}>
                    <CloseIcon className="cursor-pointer" />
                </Modal.Header>

                <Modal.Body className={`p-0 flex items-center justify-center py-3`}>
                    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

                        <form action=" " className="space-y-4" onSubmit={SignIn}>
                            {/* <!-- Name Field --> */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name*</label>
                                <input type="text" id="name" name="name" value={signIn.Name} className="mt-1 w-full px-4 py-2 border-2 outline-none border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your name" onChange={(e) => setSignIn({ ...signIn, Name: e.target.value })}/>
                            </div>

                            {/* <!-- Email Field --> */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                                <input type="email" id="email" name="email" value={signIn.Email} className="mt-1 w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" onChange={(e) => setSignIn({ ...signIn, Email: e.target.value })}/>
                            </div>

                            {/* <!-- Password Field --> */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                                <input type="password" id="password" name="password" value={signIn.Password} className="mt-1 w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" onChange={(e) => setSignIn({ ...signIn, Password: e.target.value })}/>
                            </div>

                            {/* <!-- Confirm Password Field --> */}
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password*</label>
                                <input type="password" id="confirm-password" name="confirm-password" className="mt-1 w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirm your password" />
                            </div>

                            {/* <!-- Sign Up Button --> */}
                            <div>
                                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 outline-none " onClick={SignUpThunk}> Sign Up </button>
                            </div>
                        </form>

                        {/* <!-- Already have an account? --> */}
                        <p className="text-center text-sm text-gray-600 mt-6">
                            Already have an account?
                            <Link  className="text-blue-500 hover:underline" onClick={handleSignIn}>Sign In</Link>
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SignUp;