import { addBlogFail, addCartFail, clearFormdataFail, loadBlogFail, loadProductFail, SearchProductFail, updateCartFail } from "./actionTypes";

export const initialState :any={};

const ErrorReducer =(state:any=initialState,action:loadProductFail|addCartFail|updateCartFail|SearchProductFail|addBlogFail|loadBlogFail|clearFormdataFail) => {
    switch(action.type) {
        case "LOAD_PRODUCTS_FAIL":
           return {...state, error:action.error.message}
        case "ADD_TO_CART_FAIL":
            return action.error
        case "UPDATE_TO_CART_FAIL":
            return action.error
        case "FILTER_PRODUCTS_BY_SEARCH_FAIL":
            return action.error
        case "ADD_BLOG_FAIL":
            return action.error
        case "LOAD_BLOG_FAIL":
            return action.error
        case "CLEAR_FORM_DATA_FAIL":
            return action.error
        default:
            return state
    }
}
export default ErrorReducer;