import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../SignUpValidation/Validation'

//initial values
const initialDisabled  = true;

const initialSignUpValues = {
username:'',
email: '',
password: '',
}

//inital erros
const initalSignUpErrors = {
username:'',
email: '',
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
        history.push('/SignIn')
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

    axios.get(/*'https://reqres.in/api/register'*/)
    .then(response =>{
        alert('You have successfully regesterd')
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
    <form className ='form-container' onSubmit={onSignUp}>
        <h2>Sign Up Today!</h2>
        <label> Username{' '}
        <input
        type='text'
        name='username'
        defaultValue={signUpValues.username}
        onChange={handleInput}
        placeholder='Please enter your username'
        />
        </label>
        <br></br>
        <label> Email{' '}
        <input
        type='email'
        name='email'
        defaultValue={signUpValues.email}
        onChange={handleInput}
        placeholder='Please enter your email'
        />
        </label>
        <br></br>
        <label> Password{' '}
        <input
        type='password'
        name='password'
        defaultValue={signUpValues.password}
        onChange={handleInput}
        placeholder='Please enter your password'
        />
        </label>
        <div className='errors'>
            <div>{signUpErrors.name}</div>
            <div>{signUpErrors.password}</div>
            <div>{signUpErrors.email}</div>
        </div>
        <br></br>
        <button disabled={disabled}> Sign Up</button>
    </form>
)
}

export default SignUp