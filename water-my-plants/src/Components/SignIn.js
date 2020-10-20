import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'

import * as yup from 'yup'

//import components
import ForgotPassword from '../Components/ForgotPassword'

// -------------------- basic styles -------------------
const SignInPage = styled.div`
    display: flex;
    flex-direction: column;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background-color:#ECF1EB;

    .forgotPswCards {
        align-self:center;
        margin-right: 35%;
    }

    .forgotPswButton {
        background: none;
        border: none;
        padding: 0;
        outline: none;
    }
`
const QuoteSection = styled.div`
    background-color: #E1E6F4;
    text-align: center;
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
        .required('A username is required')
        .min(5, 'Username must be at least 5 characters'),
    
    password: yup
        .string()
        .required('Password field is required')
        .min(3, 'Password must be at least 3 characters'),
})


const SignIn = () =>{
        
    // ------------- slices of state -----------------------
    const [listOfSignIns, setListOfSignIns] = useState([]) //
    const [signInForm, setSignInForm] = useState(inititialSignInForm)
    const [signInErrors, setSignInErrors] = useState(initialSignInErrors)
    const [disabled, setDisabled] = useState(initialDisabled)  

    const [visible, setVisible ] = useState(false)

    // -------------- helper functions ----------------------
    
   

    // -------------- Event Handler -------------------------
    const onChange = evt => {
        const {name, value} = evt.target
        inputChange(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        signInFormSubmit()
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
    
    const signInFormSubmit = () => {
        
        const newSignInForm = {
            username: signInForm.username.trim(),
            password: signInForm.password.trim(),  
        }
        console.log(newSignInForm)
        postNewSignInForm(newSignInForm)
    }
    
    const postNewSignInForm = newSignInForm => {
        debugger
        axios.post('https://reqres.in/api/login', newSignInForm) // need to add an api endpoint
            .then(result => {
                console.log(result)
                debugger
                console.log(result.data)
                debugger
                setListOfSignIns(listOfSignIns.concat(result.data))
            })
            .catch(err => {
                console.log('Please look up error', err)
            })
            . finally(() => {
                setSignInForm(inititialSignInForm)
            })
    }

    useEffect(() => {
        signInSchema.isValid(signInForm)
        .then(valid => {
            setDisabled(!valid);
        })
    }, [signInForm])
    
    
    
    // ------------ this is what renders to the page ---------------------
    
    return(
        <SignInPage>
            
            <FormWrapper onSubmit={onSubmit}>
                <h1>Welcome Back</h1>

                
                <label>Username/Phone number</label>
                <input
                    name = 'username'
                    type = 'text'
                    value = {signInForm.username}
                    onChange = {onChange}
                />
                <div>{signInErrors.username}</div>

                <label>Password</label>
                <input
                    name = 'password'
                    type = 'password'
                    value = {signInForm.password}
                    onChange = {onChange}
                />
                <div> {signInErrors.password}</div> 
                
                <div className='forgotPswCards'>
                    {visible ? <ForgotPassword/> : null}
                </div>
                
                <button className="forgotPswButton" onClick={() => visible === true ? setVisible(false) : setVisible(true)}>
                    Forgot password
                </button>


                       
              
                <button disabled = {disabled}> Sign In </button>
                

            </FormWrapper>

            <QuoteSection>
                <p>“You can get attached to plants when you lose faith in people.”</p>
                <h4>Manuele Fior</h4>
            </QuoteSection>


        </SignInPage>
    )
}

export default SignIn