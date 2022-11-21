import { IBaseUSer } from "../types/userResponse"
import { clearFormdata, formAction } from "./actionTypes"

export const initialState:any ={
    formStage:1,
    formUserSignup:"",
    formUserPrivacy:""
}

export const UserReducer =(state:any=initialState,action: formAction) =>{
    switch(action.type){
        case "SET_FORM_STATE":
            return {...state,formStage:action.data}
        case "SET_FORM_SIGNUP_DATA":
            return {...state,formUserSignup:action.data}
        case "SET_FORM_PRIVACY_DATA":
            return {...state,formUserPrivacy:action.data}
        case "CLEAR_FORM_DATA":
            console.log(88)
            return initialState;
        default:
            return state;
    }
}
