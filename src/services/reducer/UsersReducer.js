const InitializeState = {
    users: [],
    user: null,
    isSignUp: false,
    isSignIn: true,
    isSignInSuc : false,
    isCreated: false,
    isloading: false
}

const UserReducer = (state = InitializeState, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { ...state, isCreated: true, isSignIn : true,  isSignUp: false };

        case 'SIGN_IN':
            return { ...state, isCreated: true, isloading: false };

        case 'SIGN_CLOSE':
            return { ...state, isSignIn : false };

        case 'GET_USER':
            return { ...state, users: action.payload, isloading: false, isSignIn: false };

        case "USER_SIGN_IN":
            return { ...state, isloading: false, isSignInSuc: true, isCreated: true };

        case "TOGGLE_MODAL_SIGN_UP":
            return { ...state, isSignUp: !state.isSignUp, isCreated: false, isSignIn: false, isloading: false };

        case "TOGGLE_MODAL_SIGN_IN":
            return { ...state, isSignIn: !state.isSignIn, isCreated: false, isSignUp: false, isloading: false };

        case "LOADING":
            return { ...state, isloading: true };

        default:
            return state;
    }
}

export default UserReducer