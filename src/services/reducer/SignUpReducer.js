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
        

        default:
            return state;
    }
}

export default UserReducer