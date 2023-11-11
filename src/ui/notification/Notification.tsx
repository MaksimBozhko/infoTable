import React, { memo, useCallback } from 'react'
import { getData, getIsNotification, usersActions } from '@/store/slices/users'
import { useActions } from '@/common/hooks/useActions'
import { classNames } from '@/common/lib/classNames'
import { useSelector } from 'react-redux'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import cls from './notification.module.css'

export const Notification = memo(() => {

  const {setIsNotification} = useActions(usersActions)
  const isNotification = useSelector(getIsNotification)
  const addedUsers = useSelector(getData)

  const handleClose = useCallback((event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsNotification(false)
  }, [setIsNotification])

  const TransitionRight = useCallback((props: TransitionProps & { children: React.ReactElement<any, any> }) => {
    return <Slide {...props} direction="right"/>
  }, [])

  return (
    <Snackbar
      open={isNotification}
      autoHideDuration={2000}
      onClose={handleClose}
      TransitionComponent={TransitionRight}
      className={classNames('', {[cls.hidden]: !isNotification})}
    >
      <Alert onClose={handleClose} severity="success">
        Пользователь {addedUsers[0]?.firstName} успешно добавлен
      </Alert>
    </Snackbar>
  )
})
