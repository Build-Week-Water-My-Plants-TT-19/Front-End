import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'

import * as yup from 'yup'




const ForgotPswCard = styled.div`
    background-color: mistyrose;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid black;
    z-index: 10;
    padding: 1%;
    width: 20%;
    position: absolute;
    
    input{
        background: transparent;
        border: none;
        border-bottom: 1px solid red;
        outline: none;
    }

    button {
        margin-top: 3%;
        width: 24%;
        align-self: center;
    }
    .hide {
        display:none
    }
    .show{
        display:flex;
    }
`


const ForgotPassword = () => {
    
    const [visible, setVisible] = useState('show')
    const [visible2, setVisible2] = useState('hide')

    return (
        <div>
            <ForgotPswCard>
               <div className={visible}>
                    <p> Enter email to retrieve account </p>
                    <input
                        name = 'forgotPswEmail'
                        type = 'email'
                        value = ''
                    />
                    <button onClick={()=> {
                         setVisible('hide');
                         setVisible2('show');
                        }}>submit</button>
                </div> 

                <div className={visible2}>
                    <h4>Thank you! Please check your email.</h4>
                    <Link>resend email </Link>
                 </div>
               
            </ForgotPswCard>        
        </div>
    )
}

export default ForgotPassword

