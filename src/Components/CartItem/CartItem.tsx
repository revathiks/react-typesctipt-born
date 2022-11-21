import React, { useState } from "react";
import { cartResponse } from "../../types/cartResponse";
import { IProductResponse } from "../../types/productResponse";
export type PropType ={
    item: cartResponse,
    products:IProductResponse[],
}
const CartItem = ({item,products}:PropType) =>{
    
    const poductDetail =products.find(p=>p.id===item.productId)
    
    return (
        <div>
            {poductDetail?.title}
            {poductDetail?.price} 
            </div>
    )
}
export default CartItem;