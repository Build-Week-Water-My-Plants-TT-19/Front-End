import React, {useState} from 'react'

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


const SignUp = (props) =>{
    //initializing state
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues)
    const [signUpErrors, setSignUpErrors] = useState(initalSignUpErrors)
    const [disabled, setDisabled] = useState(initialDiabled)


    //event handlers
    const handleInput = (event) => {
        const {name, value} = event.target
    }

    const onSignUp = (event) =>{
        event.preventDefault()
        setSignUpValues(initialSignUpValues)
        console.log(signUpValues)
    }

    const disableButton = () =>{
        setDisabled(initialDiabled)
    }

    return(
        <form className ='form-container' onSubmit={onSignUp}>
            <h2>Sign Up Today!</h2>
            <label> Username{' '}
            <input
            type='text'
            name='username'
            value={signUpValues.username}
            onChange={handleInput}
            placeholder='Please enter your username'
            />
            </label>
            <br></br>
            <label> Email{' '}
            <input
            type='email'
            name='email'
            value={signUpValues.email}
            onChange={handleInput}
            placeholder='Please enter your email'
            />
            </label>
            <br></br>
            <label> Password{' '}
            <input
            type='password'
            name='password'
            value={signUpValues.password}
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
            <button 
            type='submit'
            name='submit'
            value='register'
            disabled={disabled}>Sign Up</button>
        </form>
    )
}

export default SignUp