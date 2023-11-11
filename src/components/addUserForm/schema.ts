import * as Yup from "yup";

const phoneRegExp = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/

export const Schema = Yup.object().shape({
  id: Yup.number().required('Id required'),
  firstName: Yup.string().trim().required('FirstName required'),
  lastName: Yup.string().trim().required('LastName required'),
  email: Yup.string().trim().required('Email required').email(),
  phone: Yup.string().required('Phone required').matches(phoneRegExp, 'Phone number is not valid'),
  description: Yup.string().trim().required('Description required'),
  address: Yup.object({
    streetAddress: Yup.string().trim().required('Street Address required'),
    city: Yup.string().trim().required('City required'),
    state: Yup.string().trim().required('State required'),
    zip: Yup.string().trim().required('Zip required'),
  })
});
