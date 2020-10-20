import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'

import * as yup from 'yup'







const ForgotPassword = () => {
    
    return (
        <div>
            <div>
                <label> Enter email to retrieve account </label>
                <input
                 name = 'forgotPswEmail'
                 type = 'email'
                 value = ''
                 
                />

            </div>        
        </div>
    )
}

export default ForgotPassword
