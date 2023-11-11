import { FC } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

type FormInputProps = {
  name: string
} & TextFieldProps

export const FormInputText: FC<FormInputProps> = ({name, ...otherProps}) => {
  const {control} = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({field}) => (
        <TextField
          {...otherProps}
          {...field}
        />
      )}
    />
  );
};
