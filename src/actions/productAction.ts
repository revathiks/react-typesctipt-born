import { AppDispatch, RootStore } from "../configureStore";
import { IProductResponse } from "../types/productResponse";
import axiosInstance from "../utils/axios";

export const loadProductsAction =()=> async (dispatch:AppDispatch) => {
    try {
        const result = await axiosInstance.get<IProductResponse[]>('/products');
        dispatch({
            type:"LOAD_PRODUCTS_SUCCESS",
            data:result.data
        })        
    } catch (error) {      
       dispatch({type:"LOAD_PRODUCTS_FAIL",error:error as Error}) 
    }
}

export const productsBySearchAction=(searchText:string) => (dispatch:AppDispatch) =>{
   try {
    dispatch({
        type:"FILTER_PRODUCTS_BY_SEARCH",
        data:searchText
    })
    
   } catch (error) {
    
   }

}
