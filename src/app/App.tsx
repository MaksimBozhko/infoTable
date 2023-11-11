import './styles/App.css'
import { PersonTable } from '@/components/personTable/PersonTable';
import { Search } from '@/components/search/Search';
import { UserInfo } from '@/components/userInfo/UserInfo';
import { AddUser } from '@/components/addUser/AddUser';
import Box from '@mui/material/Box';
import { Notification } from '@/ui';

function App() {
  return (
    <Box>
      <AddUser/>
      <Search/>
      <PersonTable/>
      <UserInfo/>
      <Notification/>
    </Box>
  )
}

export default App
