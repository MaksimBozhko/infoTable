import { usersThunks } from '@/store/slices/users/asyncAction'

export {
  getFilter,
  getViewSize,
  getSelectedUser,
  getData,
  getError,
  getIsNotification,
  getUsers,
  getIsLoading
} from "./selectors"

export { ViewSizeType } from './types'

export type { IData, IUser } from './types'

export { usersSlice, usersActions } from './slice'

export { usersThunks } from './asyncAction'

export { useGetDataQuery, usersApi } from './usersApi'
