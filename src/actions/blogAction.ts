import { AppDispatch } from "../configureStore";
import { IBlog } from "../types/blogResponse";
import axiosInstance from "../utils/axios";
export const addBlogAction =(data:IBlog)=>async(dispatch:AppDispatch) =>{
try {
    // const result= await axiosInstance.post<cartResponse>('/cart',{
    //     quantity:1,
    //     productId
    // })
const result = await  axiosInstance.post<IBlog>('/posts',data);
    dispatch({
        type:"ADD_BLOG_SUCCESS",
        data:result.data
    })    
} catch (error) {
    dispatch({
      type:"ADD_BLOG_FAIL",
      error:error as Error
   })
}
}

export const loadBlogAction =()=>async (dispatch:AppDispatch) => {
    try {
       const result = await axiosInstance.get('/posts');
        dispatch({
            type:"LOAD_BLOG_SUCCESS",
            data:result.data
        })    
    } catch (error) {
        dispatch({
        type:"LOAD_BLOG_FAIL",
        error:error as Error
    })    
}
}