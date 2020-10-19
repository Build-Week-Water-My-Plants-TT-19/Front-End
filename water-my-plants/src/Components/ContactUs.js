import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import axios from 'axios'

// --------------------- Basic Styling --------------------------------
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
// --------------------- initial state values --------------------------

const initialContactUsForm = {
    name: '',
    email: '',
    message: '',
}

const initialContactUsErrors = {
    name: '',
    email: '',
    message: '',
}

const initialDisabled = true

const initialListOfContactForms = []

// -------------------- ContactUs Schema -------------------------------


const contactUsSchema = yup.object().shape({
        name: yup
            .string()
            .required('Must include a name'),
        email: yup
            .string()
            .email('Must be valid email address')
            .required('Must include email address'),
        message: yup
            .string()
            .required('Must include a message')

})


const ContactUs = () =>{
    
    // -------- slices of State ----------------------

    const [listOfContactForms, setListOfContactForms] = useState(initialListOfContactForms)
    const [contactUsForm, setcontactUsForm] = useState(initialContactUsForm) 
    const [contactUsErrors, setContactUsErrors] = useState(initialContactUsErrors) 
    const [disabled, setDisabled] = useState(initialDisabled)

    // ---------------- Helper Functions ---------------------------
    

    // ---------------- Event Handlers -----------------------------
    const onChange = evt => {
        const {name, value} = evt.target
        evt.preventDefault()
        inputChange(name, value)
    }
    
    const inputChange = (name, value) => {
        yup
            .reach(contactUsSchema, name)
            .validate(value)
            .then(valid => {
                setContactUsErrors({
                    ...contactUsErrors, [name]: ''})
            })
            .catch(err => {
                setContactUsErrors ({
                    ...contactUsErrors, [name]: err.errors[0]
                })
            })
            
            setcontactUsForm({
                ...contactUsForm, [name]: value
            })
    }

    const contactFormSubmit = () => {
        
        const newContactForm = {
            name: contactUsForm.name.trim(),
            email: contactUsForm.email.trim(),
            message: contactUsForm.message.trim(),
        }
        postNewContactForm(newContactForm)
    }
    
    const postNewContactForm = newContactForm => {
        axios.post('', newContactForm) // need to add an api endpoint
            .then(result => {
                setListOfContactForms(listOfContactForms.concat(result.data))
            })
            .catch(err => {
                console.log(err)
            })
            . finally(() => {
                setcontactUsForm(initialContactUsForm)
            })
    }

    useEffect(() => {
        contactUsSchema.isValid(contactUsForm)
        .then(valid => {
            setDisabled(!valid);
        })
    }, [contactUsForm])
    
    return(
        <ContactUsPage>
            
            <ContactUsForm onsubmit={contactFormSubmit}>
                <h1>Get in touch.</h1>
                <label>Name:</label>
                <input
                    name = 'name'
                    type = 'text'
                    value = {contactUsForm.name}
                    onChange= {onChange}
                />

                <label>Email</label>
                <input
                    name = 'email'
                    type = 'email'
                    value = {contactUsForm.email} 
                    onChange = {onChange}/>

                <label>Your message</label>
                <input
                    name = 'message'
                    type = 'text'
                    value = {contactUsForm.message}
                    onChange = {onChange}/>

                <button disabled={disabled}> Sign Up </button>

            </ContactUsForm>
        </ContactUsPage>
    )
}

export default ContactUs