const InitializeState = {
    users : [],
    user: null,
    isCreated: false,
    error: null,
    isSignIn: false,
    isLoading: false
};

const AuthReducer = (state = InitializeState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return { ...state, users: [...state.users, action.payload], user: action.payload, isCreated: true, error: null, isSignIn: false, isLoading: false };

        case 'GET_USERS':
            return { ...state, users: action.payload, isCreated: false, error: null, isLoading: false };

        case "SignIn_Close":
            return { ...state, isCreated: false, error: null, isSignIn: false, isLoading: false };

        case 'SIGNIN_SUCCESS':
            return { ...state, user: action.payload, isCreated: false, isSignIn: true, error: null , isLoading: false};

        case 'AUTH_ERROR':
            return { ...state, error: action.payload, isCreated: false , isLoading: false, isSignIn: false };

        case 'LOG_OUT':
            return { ...state, user: null, isCreated: false, error: null, isSignIn: false, isLoading: false };

        case 'LOADING':
            return { ...state, isLoading: true, isCreated: false, isSignIn: false };

        default:
            return state;
    }
};

export default AuthReducer;