const InitializeState = {
    recipes: [],
    recipe: null,
    favoriteRecipe: [],
    isCreated: false,
    isloading: false
}

const RecipeReducer = (state = InitializeState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return { ...state, isCreated: true, };

        case 'GET_RECIPE':
            return { ...state, recipes: action.payload, isloading: false, isCreated: false };

        case 'SINGLE_RECIPE':
            return { ...state, recipe: action.payload, isloading: false, isCreated: false };

        case 'UPDATE_RECIPE':
            return { ...state, recipe: action.payload, isloading: false, isCreated: true };

        case 'FAVIORITE_RECIPE':
            return { ...state, favoriteRecipe: action.payload, isloading: false, isCreated: false };

        case 'GET_FAVORITE_RECIPE':
            return { ...state, favoriteRecipe: action.payload, isloading: false, isCreated: false };

        case 'LOADING':
            return { ...state, isloading: true, isCreated: false };

        default:
            return state;
    }
}

export default RecipeReducer