import React, {useState} from 'react'
import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'

import * as yup from 'yup'

// -------------------- basic styles -------------------
const SignInPage = styled.div`
    display: flex;
    flex-direction: column;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background-color:#ECF1EB;
`
const QuoteSection = styled.div`
    background-color: #E1E6F4;
`

// ----------------- initial state values --------------

const inititialSignInForm = { //default signIn Form values
        username: '',
        password: '',
    }

const initialSignInErrors ={ //default error form values
    username: '',
    password: '',
}

const initialDisabled = true // use this to make sure submit button only becomes active when forms are correctly filled

// ---------------- SignIn schema --------------------------------------

const signInSchema = yup.object().shape({
    username: yup  
        .string()
        .required('Must include Username')
        .min(5, 'Username needs 5 characters'),
    
    password: yup
        .string()
        .required('Must include Password')
        .min(5, 'Password must have min 5 characters'),
})


const SignIn = () =>{
        
    // ------------- slices of state -----------------------
    
    const [signInForm, setSignInForm] = useState(inititialSignInForm)
    const [signInErrors, setSignInErrors] = useState(initialSignInErrors)
    const [disabled, setDisabled] = useState(initialDisabled)  

    // -------------- helper functions ----------------------
    
   

    // -------------- Event Handler -------------------------
    const onChange = evt => {
        const {name, value} = evt.target
        evt.preventDefault()

        inputChange(name, value)
    }
    
    const inputChange = (name, value) => {
        yup
            .reach(signInSchema, name)
            .validate(value)
            .then(valid => {
                setSignInErrors({
                    ...signInErrors, [name]:''})
            })
            .catch(err => {
                setSignInErrors({
                    ...signInErrors,
                    [name]: err.errors[0]
                })
            })

            setSignInForm({
                ...signInForm,
                [name]: value,
        })
        
    }
    
    
    
    
    
    // ------------ this is what renders to the page ---------------------
    
    return(
        <SignInPage>
            
            <FormWrapper>
                <h1>Welcome Back</h1>

                
                <label>Username/Phone number</label>
                <input
                    name = 'username'
                    type = 'text'
                    value = ''
                    onChange = {onChange}
                />
            
                <label>Password</label>
                <input
                    name = 'username'
                    type = 'text'
                    value = ''
                    onChange = {onChange}
                />

                <Link>
                    <p>Forgot password</p>
                </Link>
                        
                <Link>
                    <button disabled = {disabled}> Sign In </button>
                </Link>

            </FormWrapper>

            <QuoteSection>
                <p>“You can get attached to plants when you lose faith in people.”</p>
                <h4>Manuele Fior</h4>
            </QuoteSection>


        </SignInPage>
    )
}

export default SignIn