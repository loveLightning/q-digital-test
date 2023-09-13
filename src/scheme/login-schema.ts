import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is Required.'),
  password: Yup.string().required('Password is required'),
})
