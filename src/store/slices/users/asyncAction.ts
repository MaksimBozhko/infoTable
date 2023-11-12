import { usersBigSize, usersSmallSize } from '@/store/slices/users/users-mock'
import { IUser, ViewSizeType } from '@/store/slices/users/types'
import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { TIMEOUT } from './const'

const fetchUsers = (count: ViewSizeType): Promise<IUser[]> => (new Promise((res) => setTimeout(() => res(count === ViewSizeType.SMALL ? usersSmallSize : usersBigSize), TIMEOUT)))

const fetchData = createAppAsyncThunk<IUser[], ViewSizeType>
('users/fetchUsers', async (count, {rejectWithValue}) => {
  try {
    return await fetchUsers(count)
  } catch (e: any) {
    return rejectWithValue(e)
  }
})

export const usersThunks = {fetchData}

