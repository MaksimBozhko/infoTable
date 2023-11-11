import { ChangeEvent, FC, memo, useCallback, useState } from 'react'
import SearchIcon from '@/assets/search.svg?react'
import { usersActions } from '@/store/slices/users'
import { useActions } from '@/common/hooks/useActions'
import TextField from '@mui/material/TextField'

export const Search: FC = memo(() => {

  const [value, setValue] = useState<string>('')
  const {setFilter} = useActions(usersActions)

  const changeValueHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }, [])

  const clickSearchHandler = useCallback(() => {
    setFilter(value)
  }, [setFilter, value])

  return <TextField
    value={value}
    onChange={changeValueHandler}
    sx={{
      '.MuiInputBase-root': {
        padding: 0
      },
    }}
    label="Search"
    InputProps={{
      endAdornment: <SearchIcon
        onClick={clickSearchHandler}
        style={{cursor: 'pointer', padding: 15}}
      />
    }}
  />
})
