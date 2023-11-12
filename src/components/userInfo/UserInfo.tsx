import React, { FC, useCallback } from 'react'
import CloseIcon from '@/assets/close.svg?react'
import { useActions } from '@/common/hooks/useActions'
import { getSelectedUser, usersActions } from '@/store/slices/users'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'

export const UserInfo: FC = () => {
  const user = useSelector(getSelectedUser)
  const {setSelectedUser} = useActions(usersActions)

  const clickCloseHandler = useCallback(() => {
    setSelectedUser(null)
  }, [setSelectedUser])

  if (!user) {
    return null
  }

  return (
    <Card style={{padding: 30, margin: '0 auto', marginTop: 20, width: 400}}>
      <Typography
        variant="subtitle1"
        component={'div'}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Box>
            Выбран пользователь{' '}
            <b>
              {user.firstName} {user.lastName}
            </b>
          </Box>
          <CloseIcon
            style={{cursor: 'pointer'}}
            onClick={clickCloseHandler}
          />
        </Stack>
      </Typography>
      <Typography
        variant="body2"
        component="div"
      >
        Описание:
      </Typography>
      <textarea
        disabled={true}
        style={{width: '100%', minHeight: 140, resize: 'vertical', padding: 5, fontSize:15}}
        defaultValue={user.description}
      />
      <Typography
        variant="subtitle1"
        component="div"
      >
        Адрес проживания: <b>{user.address.streetAddress}</b>
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
      >
        Город: <b>{user.address.city}</b>
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
      >
        Провинция/штат: <b>{user.address.state}</b>
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
      >
        Индекс: <b>{user.address.zip}</b>
      </Typography>
    </Card>
  );
};
