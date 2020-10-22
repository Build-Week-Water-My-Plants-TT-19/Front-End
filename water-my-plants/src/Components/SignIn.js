import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { saveUsername } from '../Store/Actions/saveUsernameAction'
import { connect } from 'react-redux';
import * as yup from 'yup'

//import components
import ForgotPassword from '../Components/ForgotPassword'

// -------------------- basic styles -------------------
const SignInPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    height: 94vh;  
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    background-color:#ECF1EB;
    width: 50%;
    height: 32vh;
    padding: 4%;
    box-shadow: 5px 5px 5px 5px darkgray;
    border-radius: 12px;
    border: 1px solid black;

    @media (max-width: 480px){
        width: 75%;
    }

    h1{
        text-align:center;
    }

    input{
        margin-top: 1%;
        margin-bottom: 1%;
        padding: 1%;
    }
    .signInButton {
        width:25%;
        align-self: center;
        margin-top:1%;
        margin-bottom: 1%;
    }
    .forgotPswCards {
        align-self:center;
        margin-right: 45%;
        
    }

    .forgotPswButton {
        background: none;
        border: none;
        outline: none;
        margin-bottom: 1%;
    }
`
const QuoteSection = styled.div`
    text-align: center;
    margin-bottom: 2%;  
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


const SignIn = (props) =>{
        
    // ------------- slices of state -----------------------
    const [listOfSignIns, setListOfSignIns] = useState([]) //
    const [signInForm, setSignInForm] = useState(inititialSignInForm)
    const [signInErrors, setSignInErrors] = useState(initialSignInErrors)
    const [disabled, setDisabled] = useState(initialDisabled)  
    const history = useHistory();
    const [visible, setVisible] = useState(false)
    const { saveUsername } = props

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
        axios.post('https://chrisjcorbin-watermyplants.herokuapp.com/login', `grant_type=password&username=${signInForm.username}&password=${signInForm.password}`, {
            headers: {
              // btoa is converting our client id/client secret into base64
              Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(result => {
                console.log(result)
                console.log(result.data)
                setListOfSignIns(listOfSignIns.concat(result.data))
                window.localStorage.setItem('token', result.data.access_token)
                saveUsername(signInForm.username)
                history.push("/profile");
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
                    {visible ? <ForgotPassword hideForgotPsw={setVisible}/> : null} {/* This line opens the forgetpswcard */}
                </div>
                
                <button className='signInButton' disabled = {disabled}> Sign In </button>
                
                <button className="forgotPswButton" onClick={() => visible === true ? setVisible(false) : setVisible(true)}>
                    Forgot password
                </button>
            
                <QuoteSection>
                    <p>“You can get attached to plants when you lose faith in people.”</p>
                    <h4>Manuele Fior</h4>
                </QuoteSection>
           
            </FormWrapper>
        </SignInPage>
    )
}

const mapStateToProps = state => {
    return {
      username: state.saveUsername.username
    }
  }
  
  export default connect(mapStateToProps, { saveUsername })(SignIn);