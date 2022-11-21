import React, { useState } from 'react';
import {Formik,Form,Field} from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../configureStore';

export const FormUserPrivacy = ({pageTitle,SubmitButtonText,previousButton}:any) => {
    const dispatch =useDispatch();
    const cutterntformStage:any=useSelector<RootStore>(state=>state.user.formStage)
    const reciveUpdate=useSelector<RootStore>(state=>state.user.formUserPrivacy.receiveUpdate)
    const recivenewsletter=useSelector<RootStore>(state=>state.user.formUserPrivacy.recivenewsletter)
    const [privacyFormdata,setPrivacyFormData]=useState({reciveUpdate:reciveUpdate||false,recivenewsletter:recivenewsletter||false})

    const privacyFormValidate=yup.object().shape({
        reciveUpdate:yup.bool().oneOf([true], 'You need to accept the terms and conditions for updates'),
        recivenewsletter:yup.bool().oneOf([true], 'You need to accept the terms and conditions for newsletter'),
    })
  return (
    <div>
        <h1>{pageTitle}</h1>
        <Formik
        initialValues={privacyFormdata}
        validationSchema={privacyFormValidate}
        onSubmit={
            (values,action)=>{
                try {
                    dispatch({
                        type:"SET_FORM_PRIVACY_DATA",
                        data:values
                    })

                    dispatch({
                        type:"SET_FORM_STATE",
                        data:cutterntformStage+1
                    })
                    
                } catch (error) {
                    
                }
            }
        }
        >
        {
            ({touched,errors,values}:any) => (
                <Form>
                    <label>Receive Update?<Field type="checkbox" name="reciveUpdate"/></label>
                    <div>{touched.reciveUpdate && errors.reciveUpdate  ? errors.reciveUpdate : ''}</div>
                    <label>Receive newsletter?<Field type="checkbox" name="recivenewsletter"/></label>
                    <div>{touched.recivenewsletter && errors.recivenewsletter  ? errors.recivenewsletter : ''}</div>
                    {
                        previousButton &&  <button type="submit" onClick={()=>dispatch({type:'SET_FORM_STATE',data:(cutterntformStage-1)})}>{`Back`}</button>
                    }
                    <button type="submit">{SubmitButtonText}</button>
                 
                </Form>
            )
        }

        </Formik>

    </div>
  )
}

export default FormUserPrivacy;
