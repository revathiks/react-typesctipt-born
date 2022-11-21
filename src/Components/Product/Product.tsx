import React from 'react';
import { cartResponse } from '../../types/cartResponse';
import { IProductResponse } from '../../types/productResponse';

export type ProductProps ={
    product:IProductResponse,
   // cartItem:cartResponse|undefined,
    addcart:(productId:number) => void,
    updateCart:(cartItem:cartResponse) => void
}

const Product =({product,addcart,updateCart}:ProductProps) =>{    
    return (
        <div>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <p>{product.price}</p>
            <button onClick={ ()=> addcart(product.id)}>Add to bag</button>
          <button onClick={ (e)=> updateCart({quantity: 5,productId: product.id,id: product.id})}>Update cart</button>
        </div>
    )
}
export default Product;