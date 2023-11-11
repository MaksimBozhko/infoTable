import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData, IUser, ViewSizeType } from './types';

export const initialState = {
  data: [] as IUser[],
  filter: '',
  viewSize: ViewSizeType.SMALL,
} as IData<IUser>

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setData: (state, {payload}: PayloadAction<IUser>) => {
      state.data.unshift(payload)
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
  },
  extraReducers: builder => {
    builder.addMatcher(
      (action) => {
        return action.type.endsWith('/rejected')
      },
      (state, action) => {
        const err = action.payload
          state.error = err.message ? `Native error ${err.message}` : 'Some error occurred'
      }
    )
  }
})

export const usersSlice = slice.reducer
export const usersActions = slice.actions
