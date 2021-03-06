import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../SignUpValidation/Validation'
import styled from 'styled-components'

//Sign Up Styles
const SignUpPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 94vh;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    text-align: center;
    background-color:#ECF1EB;
    width: 50%;
    height: 32vh;
    padding: 4%;
    box-shadow: 5px 5px 5px 5px darkgray;
    /* margin-left:25%; */
    border-radius: 12px;
    border: 1px solid black;

    @media (max-width: 480px){
        width: 70%;
    }
    
    input{
        margin-top: 1%;
        margin-bottom: 1%;
        padding: 1%;
    }
    button{
        width:25%;
        align-self: center;
        margin-top:1%;
        margin-bottom: 1%;
    }
`

//initial values
const initialDisabled  = true;

const initialSignUpValues = {
username:'',
phonenumber: '',
password: '',
}

//inital erros
const initalSignUpErrors = {
username:'',
phonenumber: '',
password: '',
}


const SignUp = () =>{
//initializing state
const [signUpValues, setSignUpValues] = useState(initialSignUpValues)
const [signUpErrors, setSignUpErrors] = useState(initalSignUpErrors)
const [disabled, setDisabled] = useState(initialDisabled)

//helpers
    const history = useHistory()

    const routeToSignIn = () =>{
        history.push('/profile')
    }

//event handlers
const handleInput = (event) => {
    // debugger
    const {name, value} = event.target
    yup
    .reach(schema, name)
    .validate(value)
    .then(()=>{
        setSignUpErrors({...signUpErrors, [name]: ''})
    })
    .catch(error=>{
        setSignUpErrors({...signUpErrors, [name]: error.errors[0]})
    })
    setSignUpValues({...signUpValues, [name]: value})
    // debugger
}

const onSignUp = (event) =>{
    event.preventDefault()

    axios.post('https://chrisjcorbin-watermyplants.herokuapp.com/createnewuser', signUpValues)
    .then(response =>{
        window.localStorage.setItem('token', response.data.payload)
        alert('You have successfully registered')
        routeToSignIn()
        console.log(response.data.data)
    })
    .catch(error =>{
        console.log('THIS IS YOUR ERROR----->', error)
    })

    setSignUpValues(initialSignUpValues)

    console.log(signUpValues)
}



useEffect(()=>{
    schema.isValid(signUpValues)
    .then(valid=>{
        // debugger
        setDisabled(!valid)
    })
}, [signUpValues])



return(
    <SignUpPage>
        <FormWrapper onSubmit={onSignUp}>
        
        <h2>Sign Up Today!</h2>
        <label> Username </label>
        <input
        type='text'
        name='username'
        defaultValue={signUpValues.username}
        onChange={handleInput}
        placeholder='Please enter your username'
        />
        <br></br>
        <label> phonenumber</label>
        <input
        type='text'
        name='phonenumber'
        defaultValue={signUpValues.phonenumber}
        onChange={handleInput}
        placeholder='Please enter your phonenumber'
        />
        <br></br>
        <label> Password</label>
        <input
        type='password'
        name='password'
        defaultValue={signUpValues.password}
        onChange={handleInput}
        placeholder='Please enter your password'
        />
        <div className='errors'>
            <div>{signUpErrors.name}</div>
            <div>{signUpErrors.password}</div>
            <div>{signUpErrors.phonenumber}</div>
        </div>
        <br></br>
        <button disabled={disabled}> Sign Up</button>
        </FormWrapper>
    </SignUpPage>
)
}

export default SignUp