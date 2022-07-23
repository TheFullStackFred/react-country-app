import * as Yup from 'yup'

const ContactRules = Yup.object().shape({
  fullname: Yup.string()
    .min(5, 'Too short🤯 HAHA try again😂')
    .max(50, 'Too long🤯 HAHA try again😂')
    .required('Required'),
  telephone: Yup.string()
    .min(10, 'Too short🤯 HAHA try again😂')
    .max(20, 'Too long🤯 HAHA try again😂')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string()
    .min(10, 'Too short🤯 HAHA try again😂')
    .max(50, 'Too long🤯 HAHA try again😂')
    .required('Required')
})
export default ContactRules
