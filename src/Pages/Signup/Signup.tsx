import React from 'react'
import { useSelector } from 'react-redux'
import FormUserCompleted from '../../Components/Form-completed'
import FormUserPrivacy from '../../Components/Form-privacy'
import FormUserSignup from '../../Components/Form-signup'
import { RootStore } from '../../configureStore'

export const Signup = () => {
    const cutterntformStage=useSelector<RootStore>(state=>state.user.formStage)
  return (
    <div>
        {
            (cutterntformStage===1) &&
            <FormUserSignup pageTitle='Signup' previousButton={false} SubmitButtonText='Next' />
            
        }
        {
            (cutterntformStage===2) &&
            <FormUserPrivacy pageTitle='Privacy' previousButton={true} SubmitButtonText='Submit' />
            
        }
        {
            (cutterntformStage===3) &&
            <FormUserCompleted pageTitle='Success!' successMessage='User registred successfully' />
            
        }
    </div>
  )
}
