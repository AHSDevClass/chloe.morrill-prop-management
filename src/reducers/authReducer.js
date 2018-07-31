import {
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    user: []
}

export default function(state = INITIAL_STATEs, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
        const { user } = action.payload;
            return {
                ...state,
                user
            }
    
        default: return state;
    }
}