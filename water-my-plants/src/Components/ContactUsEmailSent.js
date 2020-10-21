import React from 'react'
import styled from 'styled-components'

const ConfirmationWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 94vh;
`

const ContactUsEmailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: coral;
    height: 20vh;
    width: 75%;
    border: 50px solid #ECF1EB;
    padding: 2%;

    p{
        font-size: 3rem;
    }
`

const ContactUsEmailSent = () => {
    return (
      <ConfirmationWrapper> 
            <ContactUsEmailContainer> 
                <div>
                    <p>Thank you for your message 
                        we will be in touch soon. 
                    </p>
                </div>
            </ContactUsEmailContainer>  
        </ConfirmationWrapper>  
    )
}

export default ContactUsEmailSent
