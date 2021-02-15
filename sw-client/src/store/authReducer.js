const initialState = {
    token: null,
    current: null
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case 'SESSION_USER':
            return {...state,
                current: action.user
            };
        case 'END_SESSION':
            return initialState
        default:
            return initialState
    }
}