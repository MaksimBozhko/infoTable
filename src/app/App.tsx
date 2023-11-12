import './styles/App.css'
import { PersonTable } from '@/components/personTable'
import { Search } from '@/components/search'
import { UserInfo } from '@/components/userInfo'
import { AddUser } from '@/components/addUser'
import Box from '@mui/material/Box'
import { Notification } from '@/ui'

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
