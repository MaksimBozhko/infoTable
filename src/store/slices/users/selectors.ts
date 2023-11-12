import { RootState } from "../../store"

export const getData = (state: RootState) => state.users.data
export const getUsers = (state: RootState) => state.users.users
export const getIsLoading = (state: RootState) => state.users.isLoading
export const getError = (state: RootState) => state.users.error
export const getViewSize = (state: RootState) => state.users.viewSize
export const getFilter = (state: RootState) => state.users.filter
export const getSelectedUser = (state: RootState) => state.users.selectedUser
export const getIsNotification = (state: RootState) => state.users.isNotification
