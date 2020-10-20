import React from 'react'
import {Link} from 'react-router-dom'

const EmailNotFound = () => {
    return (
        <div>
            <h4>Email not found. Please try again</h4>
            <Link>resend email </Link>
        </div>
    )
}

export default EmailNotFound
