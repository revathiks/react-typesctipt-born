import React, { useState } from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik'; 
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../configureStore';

 const FormUserSignup = ({pageTitle,SubmitButtonText,previousButton}:any) => {
    const dispatch =useDispatch();
    const cutterntformStage:any=useSelector<RootStore>(state=>state.user.formStage)
    const userName =useSelector<RootStore>(state=> state.user.formUserSignup.name)
    const useremail =useSelector<RootStore>(state=> state.user.formUserSignup.email)
    const userpassword =useSelector<RootStore>(state=> state.user.formUserSignup.password)
    const [formData,setFormData] = useState({
        name: userName || '',
        email: useremail || '',
        password: userpassword || ''
    })
  const signUpSchema =yup.object().shape({
    name:yup.string().required('Name is required'),
    email:yup.string().email('invalid email').required('email is required'),
    password:yup.string().required('password is required')
  })

  return (
    <div>
        <Formik 
        initialValues={formData}
        validationSchema={signUpSchema}
        onSubmit={
            (values,actions)=>{
                try {
                    dispatch({
                        type:"SET_FORM_SIGNUP_DATA",
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
                ({touched,errors,values}:any)=>(
                    <Form>
                    <Field name="name" placeholder ="Name"/>
                    <div>{touched.name && errors.name  ? errors.name : ''}</div>

                    <Field name="email" placeholder ="Email"/>
                    <div>{touched.email && errors.email  ? errors.email : ''}</div>

                    <Field name="password" placeholder ="Password"/>
                    <div>{touched.password && errors.password  ? errors.password : ''}</div>
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

export default FormUserSignup;
