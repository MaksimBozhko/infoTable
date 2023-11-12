export interface IData<D = []> {
  data: D[]
  users: D[]
  error: string
  viewSize: ViewSizeType
  filter: string
  selectedUser?: IUser | null
  isNotification?: boolean
  isLoading: boolean
}

export enum ViewSizeType {
  SMALL = 32,
  BIG = 1000
}

interface IUserAddress {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: IUserAddress;
  description: string;
}
