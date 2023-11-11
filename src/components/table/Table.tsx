import { FC, memo } from 'react'
import { DEFAULT_PAGE_SIZE } from './const'
import { IUser } from '@/store/slices/users'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid'

interface ITable {
  className?: string
  rows?: GridRowsProp<IUser>
  columns: GridColDef<IUser>[]
  isLoading?: boolean
  onClickRow?: (params: GridRowParams) => void
  rowsPerPageOptions: number[]
}

export const Table: FC<ITable> = memo((props) => {
  const {
    className,
    columns,
    rows,
    onClickRow,
    isLoading,
    rowsPerPageOptions
  } = props

  return (
    <Box className={className} style={{width: '99%'}}>
      <DataGrid
        sx={{
          '.MuiDataGrid-columnHeaderTitle': {
            fontWeight: 600,
            fontSize: 17,
          },
        }}
        initialState={{
          pagination: {paginationModel: {pageSize: DEFAULT_PAGE_SIZE}},
        }}
        pageSizeOptions={rowsPerPageOptions}
        autoHeight={true}
        rows={rows || []}
        getRowId={(row) => `${row.id}_${row.firstName}_${row.lastName}`}
        columns={columns}
        onRowClick={onClickRow}
        loading={isLoading}
      />
    </Box>
  )
})
