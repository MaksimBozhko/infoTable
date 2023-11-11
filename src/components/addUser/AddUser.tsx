import { memo, useCallback, useState } from 'react'
import { AddUserForm } from '@/components/addUserForm'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import { classNames } from '@/common/lib/classNames'
import cls from './addUser.module.css'

export const AddUser = memo(() => {

  const [show, setShow] = useState<boolean>(false)
  const addUserHandler = useCallback(() => {
    setShow(prevState => !prevState)
  }, [])

  return (
    <Box style={{textAlign: 'end'}}>
      <Button
        variant={'outlined'}
        onClick={addUserHandler}
      >
        {show ? 'Отменить' : 'Добавить'}
      </Button>
      <AddUserForm
        className={classNames(cls.addUserForm, {[cls.addUserFormShow]: show})}
      />
    </Box>
  )
});
