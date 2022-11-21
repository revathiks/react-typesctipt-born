import React, { useEffect, useState } from 'react';
import { cartResponse } from '../../types/cartResponse';
import CartItem from '../../Components/CartItem';
import { IProductResponse } from '../../types/productResponse';

export type PropType ={
    cartItems: cartResponse[],
    products:IProductResponse[]
}
const Cart =({cartItems,products}:PropType) =>{
    const [total,setTotal] =useState(0);
    useEffect(
        ()=>{
          const cartItemsList=cartItems.map(item=>({...products.find(i=>i.id===item.productId),"quantity":item.quantity})) 
          //const cartItemsids=cartItems.map(item=>products.find(i=>i.id===item.productId)) 
          if(cartItemsList) {
            console.log(cartItemsList)
          setTotal(
            cartItemsList.reduce((p,c,arr) => p + Number(c.price)*c.quantity,0)
         // cartItemsList.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
          );
          }

        },
        [cartItems])

    return (
        <div>
            {
            cartItems && cartItems.map(cart=> {
                return (
                  
                    <CartItem key={cart.id} item={cart} />
                    
                   
                )
            })
            }
            <div> total is {total}</div>
        </div>
    )
}
export default Cart;