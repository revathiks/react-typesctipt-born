import { addBlogSucess, loadBlogSucess } from "./actionTypes"

export const initialState:any={}

const BlogReducer = (state:any=initialState,action:addBlogSucess|loadBlogSucess) =>{
    switch(action.type){
        case "LOAD_BLOG_SUCCESS":
            return {...state,posts:action.data}
        case "ADD_BLOG_SUCCESS":
            console.log(88)
            return {...state,posts:[...state.posts,action.data]}
        default:
            return state;
   }

}
export default BlogReducer;