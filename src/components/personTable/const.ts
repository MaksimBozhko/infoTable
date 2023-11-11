import { GridColDef } from '@mui/x-data-grid';
import { IUser } from '@/store/slices/users';

export const columns: GridColDef<IUser>[] = [
  {field: 'id', headerName: 'id', minWidth: 50, maxWidth: 70, disableColumnMenu: true},
  {field: 'firstName', headerName: 'firstName', flex: 1, minWidth: 100, disableColumnMenu: true},
  {field: 'lastName', headerName: 'lastName', flex: 1, minWidth: 100, disableColumnMenu: true},
  {field: 'email', headerName: 'email', flex: 1, disableColumnMenu: true},
  {field: 'phone', headerName: 'phone', minWidth: 120, flex: 1, disableColumnMenu: true, sortable: false},
];
