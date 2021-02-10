

export const signup = () => {
     return {
        type: 'SIGNUP',
    }
}

export const login = (token) => {
    return {
       type: 'LOGIN',
       payload: token
   }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}


// export const signup = () => ({type: 'SIGNUP'})

initialState = {
    verified: null,
    token: null,
    loggedin: null
}

export const signupReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNUP':
            return { ...state, verified: true };
        case 'LOGIN':
            return { ...state, token: action.payload, loggedin: true, verified: null };
        case 'LOGOUT':
            return Object.assign({}, initialState)
        default: 
            return state;
    }

}

