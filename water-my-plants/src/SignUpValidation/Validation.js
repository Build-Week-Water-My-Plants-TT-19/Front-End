import * as yup from 'yup'

export default yup.object().shape({
    username: yup
    .string()
    .required('A username is required')
    .min(5, 'Name must be at least 5 characters'),


    password: yup
    .string()
    .min(5, 'password must be at least 5 characters')
    .required('Password field is required'),

    email: yup
    .string()
    .required('An email is required')
    .min(3, 'email must be at least 3 characters'),

})