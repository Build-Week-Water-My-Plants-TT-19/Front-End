import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../SignUpValidation/Validation'

//initial values
const initialDiabled  = true;

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
const [disabled, setDisabled] = useState(initialDiabled)

//helpers
    const updateForm = (inputName, inputValue) =>{
        setSignUpValues({...signUpValues, [inputName]: inputValue})
    }

    const history = useHistory()

    const routeToSignIn = () =>{
        history.push('/SignIn')
    }

//event handlers
const handleInput = (event) => {
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
    updateForm({...signUpValues, [name]: value})
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
        <button disabled={disabled}
        type='submit'
        name='submit'
        defaultValue='register'
        >Sign Up</button>
        {/* add an onClick to the button to take the user to the log in page once signed up*/}
    </form>
)
}

export default SignUp