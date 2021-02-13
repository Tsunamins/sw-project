const initialState = {
    token: null,
    current: null
}

export default function auth(state = initialState, action) {
    console.log(action)
    switch (action.type) {
   
        case 'SESSION_USER':
            return {...state,
                current: action.user,
            };
            
        default:
            return initialState
    }
}