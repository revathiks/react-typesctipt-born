import { AppDispatch } from "../configureStore";
import { cartResponse } from "../types/cartResponse";
import axiosInstance from "../utils/axios";

export const addCartAction =(productId:number) => async(dispatch:AppDispatch) =>{
   try {
    const result= await axiosInstance.post<cartResponse>('/cart',{
        quantity:1,
        productId
    })
    dispatch({
        type : "ADD_TO_CART_SUCCESS",
        data: result.data
    })
    
   } catch (error) {
    dispatch({
        type:"ADD_TO_CART_FAIL",
        error:error as Error
    })
    
   }
}

export const updateCartAction =(cartItem:cartResponse) => async (dispatch:AppDispatch) =>{
    try {
        console.log(cartItem)
        const res = await axiosInstance.put<cartResponse>(
            `/cart/${cartItem.productId}`,
            cartItem,
          );
        dispatch({
            type:"UPDATE_TO_CART_SUCCESS",
            data:res.data
        })
        
    } catch (error) {
        dispatch({
            type:"UPDATE_TO_CART_FAIL",
            error:error as Error
        })
        
    }
}