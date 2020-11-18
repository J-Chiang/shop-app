import { categoryConstants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};

const buildNewCategories = (categories, category) => {
    let res = [];

    if (category.parentId) {
        res = [...categories, {
            _id: category._id,
            name: category.name,
            slug: category.slug,
            parentId: category.parentId,
            children: category.children
        }]

        return res;
    }

    for(let cat of categories) {
        if (cat._id === category.parentId ) {
            res.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories([cat.children, {
                    _id: cat._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children
                }], category) : []
            })
        } else {
            res.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(cat.children, category) : []
            });
        }
    }

    return res;
}

const categoryReducer = (state=initState, action) => {
    switch(action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST: 
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
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const updatedCategories = buildNewCategories(state.categories, action.payload.category);
            state = {
                ...state,
                loading: false,
                categories: updatedCategories
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState
            }
            break;
        default:
            break;

    }

    return state;
}

export default categoryReducer;