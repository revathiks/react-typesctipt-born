import React, { useEffect } from 'react';
import axios from 'axios';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik'; 
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from '../../configureStore';
import { addBlogAction, loadBlogAction } from '../../actions/blogAction';

interface MyFormValues {
    title: string;
    isComplete:boolean
  }
export const Blog :React.FC<{}> = () => {
  const initialValues: MyFormValues = { title: '' , isComplete:false};
  const dispatch=useDispatch<AppDispatch>();
  const blogs:any=useSelector<RootStore>(state=>state.blogs.posts)
  
  useEffect(()=>{
   loadBlogAction()(dispatch)
  },[])

  return (
    <div>
        <Formik
        initialValues={initialValues}
        onSubmit={
            (values,actions)=>{
                const productId=blogs?blogs.length +1:1
                addBlogAction({id:productId,...values})(dispatch)
                try {
                    
                } catch (error) {
                    
                }
            }
        }
        >
            <Form>
                <Field id="title" name="title" placeholder="Title"/>
                <button type="submit">Add</button>
            </Form>

        </Formik>
    </div>
  )
}
