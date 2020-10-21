import * as yup from 'yup'

export default yup.object().shape({
    
    username: yup
    .string()
    .required('A username is required')
    .min(5, 'Name must be at least 5 characters'),

    phonenumber: yup
    .string()
    .required('An phonenumber is required')
    .min(3, 'phonenumber must be at least 3 characters'),

    password: yup
    .string()
    .min(5, 'password must be at least 5 characters')
    .required('Password field is required'),


})


// password
// username
// username@username.com