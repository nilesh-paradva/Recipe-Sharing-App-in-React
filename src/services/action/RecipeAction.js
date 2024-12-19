import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { RecipeDb } from "../../firebase";

export const AddRecipe = () => {
    return {
        type: "ADD_RECIPE"
    }
}

export const GetRecipe = (data) => {
    return {
        type: "GET_RECIPE",
        payload: data
    }
}

export const DeleteRecipe = () => {
    return {
        type: "DELETE_RECIPE"
    }
}

export const SingleRecipe = (data) => {
    return {
        type: "SINGLE_RECIPE",
        payload: data
    }
}

export const UpdateRecipe = (data) => {
    return {
        type: "UPDATE_RECIPE",
        payload: data
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const AddRecipeThunk = data => async dispatch => {
    try {
        await addDoc(collection(RecipeDb, "recipes"), data);
        dispatch(AddRecipe());
    } catch (err) {
        console.error(err);
    }
};

export const GetRecipeThunk = () => async dispatch => {

    dispatch(loading());

    try {
        const recs = (await getDocs(collection(RecipeDb, "recipes"))).docs.map(doc => ({ ...doc.data(), id: doc.id }));
        dispatch(GetRecipe(recs));
    } catch (err) {
        console.error("Error get recipes:", err);
    }
};

export const DeleteRecipeThunk = (id) => async dispatch => {
    try{
        await deleteDoc(doc(RecipeDb, "recipes", `${id}`));
        dispatch(GetRecipeThunk());
    } catch(err){
        console.error(err);
    }
}

export const SingleRecipeThunk = (id) => async dispatch => {
    
    dispatch(loading());

    try{
        const rec = await getDoc(doc(RecipeDb, "recipes", `${id}`));
        let getData = rec.data();
        getData.id = rec.id;

        dispatch(SingleRecipe(getData));
        console.log(" getData: ",getData);

    } catch(err){
        console.error(err);
    }
}

export const UpdateRecipeThunk = (data) => async dispatch => {
    try{
        await setDoc(doc(RecipeDb, "recipes", `${data.id}`), data);
        dispatch(UpdateRecipe(data));
        console.log(" updateRec: ",data);
    } catch(err){
        console.error(err);
    }
}