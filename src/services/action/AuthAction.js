import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const SignUpSUC = (data) => {
    return {
        type: "SIGNUP_SUCCESS",
        payload: data
    };
};

export const AuthError = (error) => {
    return {
        type: "AUTH_ERROR",
        payload: error
    };
};

export const SignInSUC = (data) => {
    return {
        type: "SIGNIN_SUCCESS",
        payload: data
    };
};

// Thunk

export const UserSignUp = (data) => async dispatch => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((res) => {
            dispatch(SignUpSUC(res.user));
        })
        .catch((error) => {
            dispatch(AuthError(error.message));
        });
};

export const UserSignIn = (data) => async dispatch => {
    signInWithEmailAndPassword(auth, data.email, data.password)
        .then((res) => {
            dispatch(SignInSUC(res.user));
        })
        .catch((error) => {
            dispatch(AuthError(error.message));
        });
};
