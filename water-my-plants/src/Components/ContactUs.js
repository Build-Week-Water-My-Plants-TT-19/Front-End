import React from 'react'
import styled from 'styled-components'


const ContactUsPage=styled.div`
    display:flex;
    justify-content: center;
`
const ContactUsForm = styled.form`
    display:flex;
    flex-direction:column;
    background-color: #ECF1EB;
    width: 45%;

`


const ContactUs = () =>{
    return(
        <ContactUsPage>
            
            <ContactUsForm>
                <h1>Get in touch.</h1>
                <label>Name:</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Your message</label>
                <input></input>
                <button>Sign Up</button>
            </ContactUsForm>
        </ContactUsPage>
    )
}

export default ContactUs