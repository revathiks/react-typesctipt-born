import React from 'react';
import {connect} from 'react-redux';
import { addCartAction, updateCartAction } from '../../actions/cartAction';
import { AppDispatch, RootStore } from '../../configureStore';
import { cartResponse } from '../../types/cartResponse';
import { IProductResponse } from '../../types/productResponse';
import Product from './Product';

const mapStateToProps =(state:RootStore,props:any) => {    
    return {
       cart:state.cart,
       //cartItem:state.cart.find(item=>item.productId===props.product.id)
    }
}

const mapDispatchToProps = (dispatch:AppDispatch) =>{
    return {
        addcart:(productId:number)=> addCartAction(productId)(dispatch),
        updateCart : (cartItem:cartResponse) => updateCartAction(cartItem)(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)