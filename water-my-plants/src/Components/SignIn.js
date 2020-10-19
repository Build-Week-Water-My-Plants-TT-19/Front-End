import React, {useState} from 'react'
import styled  from 'styled-components'
import {Link} from 'react-router-dom'

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
// -------------------------------------------------------

const inititialSignIn = {
        username: '',
        password: '',
    }




const SignIn = () =>{
    
    
    
    
    
    
    // slices of state
    const [signIn, setSignIn] = useState(inititialSignIn)
    
    
    
    
    
    
    
    // this is what renders to the page
    
    return(
        <SignInPage>
            
            <FormWrapper>
                <h1>Welcome Back</h1>

                
                <label>Username/Phone number</label>
                <input></input>
            

            
                <label>Password</label>
                <input></input>
                <Link>
                    <p>Forgot password</p>
                </Link>
                  
                        
                <Link>
                    <button> Sign In </button>
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