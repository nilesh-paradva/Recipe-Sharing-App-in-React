import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const SignUpSUC = (data) => {
    return {
        type: "SIGNUP_SUCCESS",
        payload: data
    }
}


// Thunk

export const UserSignUp = (data) => async dispatch => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((res) => {
            dispatch(SignUpSUC(res.user));
            console.log("userSignUp", res.user); 
        })
        .catch((error) => {
            console.log(error);
        });
};