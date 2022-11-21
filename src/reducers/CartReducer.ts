import { cartResponse } from "../types/cartResponse";
import { addCartSuccess, loadCartSuccess, updateCartSuccess } from "./actionTypes";

const initialState:cartResponse[] =[];

const CartReducer=(state:cartResponse[]=initialState,action:addCartSuccess|updateCartSuccess|loadCartSuccess) =>{
    switch(action.type) {
        case "ADD_TO_CART_SUCCESS":
            const product =state.find(item=>item.productId===action.data.productId);
            if(product){
                const finalState= state.map(item => 
                    item.productId === action.data.productId ? { ...item,quantity:item.quantity+=action.data.quantity} : item
                )
                return [...finalState]

            }else{
                return [...state,action.data]
            }
        case "UPDATE_TO_CART_SUCCESS":
            const finalState= state.map(item => 
                item.productId === action.data.productId ? { ...item,quantity:item.quantity+=5} : item
            )
            return [...finalState]
         
            
        default:
            return state;    
    }
}

export default CartReducer;