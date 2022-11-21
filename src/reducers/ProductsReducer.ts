import { IProductResponse } from "../types/productResponse";
import { loadProductSuccess, SearchProduct } from "./actionTypes";

export const productInitialState :any={}

const ProductReducer =(state:any=productInitialState,action:loadProductSuccess|SearchProduct) => {
    switch(action.type){
        case "LOAD_PRODUCTS_SUCCESS":
            console.log(1)
            return { items:action.data,filteredItems:action.data }
        case "FILTER_PRODUCTS_BY_SEARCH":
            console.log(2)

            const searchText=action.data;
            const filteredItems= state.items.filter((item:any)=>item.title.toLowerCase().startsWith(searchText.toLowerCase()));
                return { ...state, filteredItems:filteredItems }
        default:
            return state
    }
}
export default ProductReducer;