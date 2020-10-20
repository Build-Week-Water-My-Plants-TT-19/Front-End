import React from 'react'
import styled from 'styled-components'

const ContactUsEmailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: coral;
`

const ContactUsEmailSent = () => {
    return (
        
        <ContactUsEmailContainer> 
            <div>
                <p>Thank you for message 
                    we will be in touch soon. 
                </p>
            </div>
        </ContactUsEmailContainer>   
    )
}

export default ContactUsEmailSent
