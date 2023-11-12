import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData, IUser, ViewSizeType } from './types';
import { usersThunks } from '@/store/slices/users/asyncAction'

export const initialState = {
  data: [] as IUser[],
  users: [] as IUser[],
  filter: '',
  viewSize: ViewSizeType.SMALL,
  isLoading: false
} as IData<IUser>

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setData: (state, {payload}: PayloadAction<IUser>) => {
      state.data.unshift(payload)
    },
    setUsers: (state, {payload}: PayloadAction<IUser[]>) => {
      state.users = payload
    },
    setViewSize: (state, {payload}: PayloadAction<ViewSizeType>) => {
      state.viewSize = payload
    },
    setFilter: (state, {payload}: PayloadAction<string>) => {
      state.filter = payload
    },
    setSelectedUser: (state, {payload}: PayloadAction<IUser | null>) => {
      state.selectedUser = payload
    },
    setIsNotification: (state, {payload}: PayloadAction<boolean>) => {
      state.isNotification = payload
    },
    setIsLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(usersThunks.fetchData.fulfilled, (state, action) => {
        state.users = action.payload
        state.isLoading = false
      })
      .addCase(usersThunks.fetchData.pending, (state) => {
        state.isLoading = true
      })
      .addMatcher(
        (action) => {
          return action.type.endsWith('/rejected')
        },
        (state, action) => {
          const err = action.payload
          state.error = err.message ? `Native error ${err.message}` : 'Some error occurred'
          state.isLoading = false
        }
      )
  }
})

export const usersSlice = slice.reducer
export const usersActions = slice.actions
