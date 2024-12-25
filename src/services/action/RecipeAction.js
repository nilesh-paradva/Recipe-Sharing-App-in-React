import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, query, where, getFirestore  } from "firebase/firestore"
import {RecipeDb} from "../../Firebase";

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

export const FavoriteRecipe = () => {
    return {
        type: "ADD_FAVORITE_RECIPE",
    }
}

export const GetFavoriteRecipe = (data) => {
    return {
        type: "GET_FAVORITE_RECIPE",
        payload: data
    }
}

export const DeleteFavoriteRecipe = () => {
    return {
        type: "DELETE_FAVORITE_RECIPE"
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}

// thunk

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
        setTimeout(() => {
            dispatch(GetRecipe(recs));
        }, 2000);
    } catch (err) {
        console.error("Error get recipes:", err);
    }
};

export const DeleteRecipeThunk = (id) => async dispatch => {
    try {
        await deleteDoc(doc(RecipeDb, "recipes", `${id}`));
        dispatch(GetRecipeThunk());
    } catch (err) {
        console.error(err);
    }
}

export const SingleRecipeThunk = (id) => async dispatch => {
    try {
        const rec = await getDoc(doc(RecipeDb, "recipes", `${id}`));
        let getData = rec.data();
        getData.id = rec.id;
        dispatch(SingleRecipe(getData));
    } catch (err) {
        console.error(err);
    }
}

export const UpdateRecipeThunk = (data) => async dispatch => {

    dispatch(loading());

    try {
        await setDoc(doc(RecipeDb, "recipes", `${data.id}`), data);
        dispatch(UpdateRecipe(data));
    } catch (err) {
        console.error(err);
    }
}

export const AddFavoriteRecipeThunk = (recipe) => async dispatch => {
    try {
        const q = query(collection(RecipeDb, "FavoriteRecipe"),where("id", "==", recipe.id));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            alert('This recipe already exists in your favorites!');
        } else {
            await addDoc(collection(RecipeDb, "FavoriteRecipe"), recipe);
            dispatch(FavoriteRecipe());
        }
    } catch (err) {
        console.error(err);
    }
};


export const GetFavoriteRecipeThunk = () => async dispatch => {

    // dispatch(loading());

    try {
        const recs = (await getDocs(collection(RecipeDb, "FavoriteRecipe"))).docs.map(doc => ({ ...doc.data(), id: doc.id }));
        // setTimeout(() => {
            dispatch(GetFavoriteRecipe(recs));
        // }, 2000);
    } catch (err) {
        console.error("Error get recipes:", err);
    }
};

export const DeleteFavoriteRecipeThunk = (id) => async dispatch => {
    try {
        await deleteDoc(doc(RecipeDb, "FavoriteRecipe", `${id}`));
        dispatch(GetFavoriteRecipeThunk());
    } catch (err) {
        console.error(err);
    }
}
