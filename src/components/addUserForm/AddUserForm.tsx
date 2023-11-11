import { FC, useCallback, useEffect } from 'react'
import { FormInputText } from '@/components/formInputText'
import { Schema } from './schema'
import { defaultValues, formInputs } from './model'
import { IUser, usersActions } from '@/store/slices/users'
import { useActions } from '@/common/hooks/useActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface IAddUserForm {
  className?: string
}

export const AddUserForm: FC<IAddUserForm> = (({className}) => {

  const {setData, setIsNotification} = useActions(usersActions)

  const methods = useForm<IUser>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(Schema)
  })

  const {
    reset,
    handleSubmit,
    formState: {isSubmitSuccessful, errors, isValid, isDirty},
  } = methods

  const onSubmit = useCallback((data: IUser) => {
    setData(data)
    reset()
  }, [reset, setData])

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsNotification(isSubmitSuccessful)
    }
  }, [isSubmitSuccessful, setIsNotification])

  return (
    <Box className={className}>
      <FormProvider {...methods}>
        <Stack
          display={'grid'}
          gridTemplateColumns={'repeat(12, 1fr)'}
          gridTemplateRows={'repeat(4, 1fr)'}
          gap={2}
          padding={1}
        >
          {
            formInputs.map((input) => {
              const keys = input.name.split('.')
              let error
              if (keys.length === 2) {
                error = (errors as any)[keys[0]]?.[keys[1]]
              } else {
                error = (errors as any)[keys[0]]
              }

              return <FormInputText
                {...input}
                required
                key={input.name}
                error={!!error}
                helperText={error && error.message}
                sx={{gridArea: input.content}}
              />
            })
          }
        </Stack>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
        >
          Сохранить
        </Button>
      </FormProvider>
    </Box>
  )
})
