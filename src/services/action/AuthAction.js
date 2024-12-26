import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider, RecipeDb } from "../../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

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

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const closeSign = () => {
    return {
        type: "SignIn_Close"
    }
}

const UsersDataGet = (data) => {
    return {
        type: "GET_USERS",
        payload: data
    }
}

const SignInClose = () => {
    return {
        type: "LOG_OUT"
    }
}

// Thunk

export const UserSignUp = (data) => async (dispatch) => {
    try {
        dispatch(loading());
        const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const userData = {
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName || data.name
        };
        await addDoc(collection(RecipeDb, "users"), userData);
        localStorage.setItem("User_Login_Id", JSON.stringify(userData.uid));
        dispatch(SignUpSUC(userData));
    } catch (error) {
        dispatch(AuthError(error.message));
    }
};

export const GetUsersThunk = () => async dispatch => {
    dispatch(loading());
    try {
        const res = await getDocs(collection(RecipeDb, "users"));
        const data = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        dispatch(UsersDataGet(data));
    } catch (error) {
        dispatch(AuthError(error.message));
    }
}

export const UserSignIn = (data) => async dispatch => {
    dispatch(loading());
    signInWithEmailAndPassword(auth, data.email, data.password).then((res) => {
        dispatch(SignInSUC(res.user));
    }).catch((error) => {
        dispatch(AuthError(error.message));
    });
};

export const SignInPopup = () => async dispatch => {
    try {
        const res = await signInWithPopup(auth, provider);
        console.log("User signed in:", res.user);

        await addDoc(collection(RecipeDb, "users"), {
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL
        });

        localStorage.setItem("User_Login_Id", JSON.stringify(res.user.uid));
        dispatch(SignInSUC(res.user));
    } catch (error) {
        console.error("Sign in error:", error);
        dispatch(AuthError(error.message));
    }
};

export const SignOutThunk = () => async dispatch => {
    try {
        await signOut(auth);
        localStorage.removeItem("User_Login_Id");
        dispatch(SignInClose());
        return true; 
    } catch (error) {
        console.error("Sign out error:", error);
        return false;
    }
};