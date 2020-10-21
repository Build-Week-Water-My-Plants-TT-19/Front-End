import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'

import * as yup from 'yup'



// --------------- Basic Styling -------------------
const ForgotPswCard = styled.div`
    background-color: mistyrose;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid black;
    z-index: 10;
    padding: 1%;
    width: 22%;
    position: absolute;
    box-shadow: 5px 5px 5px 5px darkgray;
    
    input{
        background: transparent;
        border: none;
        border-bottom: 1px solid red;
        outline: none;
    }

    button {
        margin-top: 3%;
        width: 35%;
        align-self: center;
    }
    .hide {
        display:none
    }
    .show{
        display:flex;
    }
`
const ForgotPswInput = styled.div`
    display:flex;
    flex-direction: column;
`

const EmailSent = styled.div`
    display:flex;
    flex-direction: column;
`
//--------------- initial state values --------------
const initialEmailFormvalue = {email: ''}

const ForgotPassword = () => {
    
    // ---------- slices of state --------------------
    const [visible, setVisible] = useState('show') 
    const [visible2, setVisible2] = useState('hide')

    const[emailForm, setEmailForm] = useState(initialEmailFormvalue)

    // ----------- Event Handlers -----------------

    const onChange = (evt) => {
        const {name, value} = evt.target

        setEmailForm({...emailForm, [name]: value})
    }

    return (
        <div>
            <ForgotPswCard>
               <ForgotPswInput className={visible} One>
                    <p> Enter email to retrieve account </p>
                    <input
                        name = 'email'
                        type = 'email'
                        value = {emailForm.email}
                        onChange = {onChange}
                    />
                    <button onClick={()=> {
                         setVisible('hide');
                         setVisible2('show');
                        }}>submit</button>
                </ForgotPswInput> 

                <EmailSent className={visible2}>
                    <h4>Thank you! Please check your email.</h4>
                    <Link>resend email </Link>
                 </EmailSent>
               
            </ForgotPswCard>        
        </div>
    )
}

export default ForgotPassword

