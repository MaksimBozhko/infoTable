import { FC, memo, useCallback, useEffect } from 'react'
import { columns } from './const'
import { SizeSwitch } from '@/ui'
import { Table } from '@/components/table'
import { filterUsers } from './filter'
import { useActions } from '@/common/hooks/useActions'
import {
  getIsLoading,
  getUsers,
  getData,
  getFilter,
  getViewSize,
  IUser,
  usersThunks,
  usersActions
} from '@/store/slices/users'
import { useSelector } from 'react-redux'
import { GridRowParams } from '@mui/x-data-grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const PersonTable: FC = memo(() => {

  const {setSelectedUser} = useActions(usersActions)
  const {fetchData} = useActions(usersThunks)

  const viewSize = useSelector(getViewSize)
  const addedUsers = useSelector(getData)
  const users = useSelector(getUsers)
  const isLoading = useSelector(getIsLoading)
  const filterValue = useSelector(getFilter)

  useEffect(() => {
    fetchData(viewSize)
  }, [fetchData, viewSize])

  // const {data, isFetching} = useGetDataQuery(viewSize)

  const filteredData = filterUsers(users, addedUsers, filterValue)

  const rowsPerPageOptions = Array.from(new Set([5, 10, 15, 25]))

  const clickRowHandler = useCallback((params: GridRowParams<IUser>) => {
    setSelectedUser(params.row)
  }, [setSelectedUser])

  return (
    <>
      <Toolbar style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
        <Typography
          style={{alignSelf: 'end'}}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Список пользователей
        </Typography>
        <SizeSwitch/>
      </Toolbar>

      <Table
        rows={filteredData}
        columns={columns}
        isLoading={isLoading}
        onClickRow={clickRowHandler}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </>
  )
})
