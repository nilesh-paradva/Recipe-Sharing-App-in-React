const InitializeState = {
    user: null,
    isCreated: false
}

const SignUpReducer = (state = InitializeState, action) => {
    switch (action.type) {
        
        case 'SIGNUP_SUCCESS':
            return { ...state, user: action.payload, isCreated: true };

        case 'SIGNUP_FAILURE':
            return { ...state, user: null };

        default:
            return state;
    }
}

export default SignUpReducer