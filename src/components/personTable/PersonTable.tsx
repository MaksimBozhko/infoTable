import { FC, memo, useCallback } from 'react'
import { columns } from './const'
import { filterUsers } from './filter'
import { SizeSwitch } from '@/ui'
import { Table } from '@/components/table'
import { useActions } from '@/common/hooks/useActions'
import { getData, getFilter, getViewSize, usersActions, IUser } from '@/store/slices/users'
import { useSelector } from 'react-redux'
import { GridRowParams } from '@mui/x-data-grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useGetDataQuery } from '@/store/slices/users/usersApi'

export const PersonTable: FC = memo(() => {

  const viewSize = useSelector(getViewSize)
  const addedUsers = useSelector(getData)
  const filterValue = useSelector(getFilter)
  const {data, isFetching} = useGetDataQuery(viewSize)
  const {setSelectedUser} = useActions(usersActions)

  const filteredData = filterUsers(data, addedUsers, filterValue)

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
        isLoading={isFetching}
        onClickRow={clickRowHandler}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </>
  )
})
