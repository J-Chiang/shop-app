import { categoryConstants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};

const categoryReducer = (state=initState, action) => {
    switch(action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST: 
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS: 
            state = {
                ...state,
                loading: false,
                error: null,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE: 
            state = {
                ...state,
                loading: false,
                error: action.payload.categories
            }
            break;
        default:
            break;
    }

    return state;
}

export default categoryReducer;