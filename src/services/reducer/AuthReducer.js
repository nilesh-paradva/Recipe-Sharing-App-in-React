const InitializeState = {
    user: null,
    isCreated: false,
    error: null
};

const AuthReducer = (state = InitializeState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return { ...state, user: action.payload, isCreated: true, error: null };
        case 'SIGNIN_SUCCESS':
            return { ...state, user: action.payload, isCreated: true, error: null };
        case 'AUTH_ERROR':
            return { ...state, error: action.payload, isCreated: false };
        default:
            return state;
    }
};

export default AuthReducer;