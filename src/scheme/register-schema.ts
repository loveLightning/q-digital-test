import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('First Name is Required.'),
  email: Yup.string().email().required('Email is Required.'),
  password: Yup.string().required('Password is required'),
  password_confirmation: Yup.string().test(
    'passwords-match',
    'Passwords must match',
    function (value) {
      return this.parent.password === value
    },
  ),
})
