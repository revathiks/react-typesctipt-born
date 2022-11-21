import { IUser } from "../types/authResponse"
import { IBlog } from "../types/blogResponse"
import { cartResponse } from "../types/cartResponse" 
import { IProductResponse } from "../types/productResponse"
import { IBaseUSer, IFormUser } from "../types/userResponse"

export type loadProductSuccess = {
    type:'LOAD_PRODUCTS_SUCCESS',
    data:IProductResponse[]
}
export type loadProductFail = {
    type:'LOAD_PRODUCTS_FAIL',
    error:Error
}

export type addCartSuccess ={
    type: 'ADD_TO_CART_SUCCESS',
    data: cartResponse
}

export type addCartFail ={
    type:"ADD_TO_CART_FAIL",
    error: Error
}

export type updateCartSuccess = {
    type:'UPDATE_TO_CART_SUCCESS',
    data:cartResponse
}

export type updateCartFail ={
    type:"UPDATE_TO_CART_FAIL",
    error: Error
}

export type loadCartSuccess ={
    type: "LOAD_CART_SUCCESS",
    data:cartResponse[]
}
export type loadCartFail ={
    type: "LOAD_CART_FAIL",
    error: Error
}

export type SearchProduct ={
    type:"FILTER_PRODUCTS_BY_SEARCH",
    data:string
}

export type SearchProductFail ={
    type: "FILTER_PRODUCTS_BY_SEARCH_FAIL",
    error: Error
}

export type addBlogSucess ={
    type:"ADD_BLOG_SUCCESS",
    data:IBlog
}

export type addBlogFail ={
    type:"ADD_BLOG_FAIL",
    error: Error
}

export type loadBlogSucess ={
    type:"LOAD_BLOG_SUCCESS",
    data:IBlog
}
export type loadBlogFail ={
    type:"LOAD_BLOG_FAIL",
    error: Error
}
export type setFormState ={
    type:"SET_FORM_STATE",
    data:number
    
}
export type setFormSignup ={
    type:"SET_FORM_SIGNUP_DATA",
    data:any
    
}
export type setFormPrivacy ={
    type:"SET_FORM_PRIVACY_DATA",
    data:any
    
}


export type clearFormdata ={
    type:"CLEAR_FORM_DATA",
    data:null
}
export type formAction =setFormState|setFormSignup|setFormPrivacy|clearFormdata
   
export type clearFormdataFail ={
    type:"CLEAR_FORM_DATA_FAIL",
    error: Error
}

