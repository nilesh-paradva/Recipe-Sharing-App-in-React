import { addDoc, collection, getDocs } from "firebase/firestore";
import { RecipeDb } from "../../firebase";

export const toggleModal = () => {
    return{
        type: "TOGGLE_MODAL_SIGN_UP",
    }
};

export const toggleModalSignIn = () => {
    return{
        type: "TOGGLE_MODAL_SIGN_IN",
    }
};

export const SignUpAct = () => {
    return {
        type: "SIGN_UP"
    }
}

export const GetUserAct = (data) => {
    return {
        type: "GET_USER",
        payload : data
    }
}

export const loading = () => {
    return{
        type: "LOADING"
    }
}

// thunk

export const SignUpThunk = data => async dispatch => {

    // dispatch(loading());

    try {
        await addDoc(collection(RecipeDb, "users"), data);
        dispatch(SignUpAct());
    } catch (err) {
        console.error(err);
    }
};

export const GetUserThunk = () => async dispatch => {

    dispatch(loading());

    try {
        const recs = (await getDocs(collection(RecipeDb, "users"))).docs.map(doc => ({ ...doc.data(), id: doc.id }));
        dispatch(GetUserAct(recs));
    } catch (err) {
        console.error("Error get recipes:", err);
    }
};