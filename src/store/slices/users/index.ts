export {
  getFilter,
  getViewSize,
  getSelectedUser,
  getData,
  getError,
  getIsNotification
} from "./selectors"

export { ViewSizeType } from './types'

export type { IData, IUser } from './types'

export { usersSlice, usersActions } from './slice'

export { useGetDataQuery, usersApi } from './usersApi'
