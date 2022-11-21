import { AppDispatch } from "../configureStore";
import { IFormUser } from "../types/userResponse";
import axiosInstance from "../utils/axios";


export const addUserAction=(data:any)=>async(dispatch:AppDispatch) =>{
    try {
        const result = await axiosInstance.post<IFormUser>('/users',data);
        
        dispatch({
            type:"CLEAR_FORM_DATA",
            data:null
        })
        
    } catch (error) {
        
    }
}