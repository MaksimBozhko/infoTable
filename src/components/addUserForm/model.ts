import { IUser } from '@/store/slices/users'

export const formInputs = [
  {
    name: 'id',
    label: 'Id',
    type: 'number',
    content: "1 / 2 / 6 / 4"
  },
  {
    name: 'firstName',
    label: 'FirstName',
    content: "2 / 1 / 3 / 6"
  },
  {
    name: 'lastName',
    label: 'LastName',
    content: "2 / 7 / 3 / 12"
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    content: "3 / 5 / 4 / 8"
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    content: "3 / 1 / 4 / 4"
  },
  {
    name: 'description',
    label: 'Description',
    content: "3 / 9 / 4 / 13"
  },
  {
    name: 'address.streetAddress',
    label: 'Street Address',
    content: "4 / 1 / 5 / 5"
  },
  {
    name: 'address.city',
    label: 'City',
    content: "4 / 5 / 5 / 8"
  },
  {
    name: 'address.state',
    label: 'State',
    content: "4 / 8 / 5 / 11"
  },
  {
    name: 'address.zip',
    label: 'Zip',
    content: "4 / 11 / 5 / 13"
  },
]

export const defaultValues: IUser = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  description: '',
  address: {
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
  }
}
