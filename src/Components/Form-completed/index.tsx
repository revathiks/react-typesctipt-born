import React, { useEffect } from 'react';
import axiosInstance from '../../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../configureStore';
import { IFormUser } from '../../types/userResponse';
import { addUserAction } from '../../actions/userAction';

export const FormUserCompleted = ({pageTitle,successMessage}:any) => {
    const dispatch =useDispatch();
    const cutterntformStage:any=useSelector<RootStore>(state=>state.user.formStage)
    const userName =useSelector<RootStore>(state=> state.user.formUserSignup.name)
    const useremail =useSelector<RootStore>(state=> state.user.formUserSignup.email)
    const userpassword =useSelector<RootStore>(state=> state.user.formUserSignup.password)
    const reciveUpdate=useSelector<RootStore>(state=>state.user.formUserPrivacy.receiveUpdate)
    const recivenewsletter=useSelector<RootStore>(state=>state.user.formUserPrivacy.recivenewsletter)
   const data = {'name':userName||'','email':useremail||'','password':userpassword||'','reciveUpdate':reciveUpdate||false,'recivenewsletter':recivenewsletter||false}
    useEffect(()=>{
        // const addUser= async (data:any) => {

        //     //const result = await axiosInstance.post<IFormUser>('/users',data);
        //     addUserAction(data)
        //   };
        //   //addUser(data)
        addUserAction(data)(dispatch)

    },[])
  return (
    <div>
        <h1>{pageTitle}</h1>
        <div>{successMessage}</div>
    </div>
  )
}
export default FormUserCompleted;
