import { FC, memo, MouseEvent } from 'react'
import { getViewSize, usersActions, ViewSizeType } from '@/store/slices/users'
import { useActions } from '@/common/hooks/useActions'
import { useSelector } from 'react-redux'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const SizeSwitch: FC = memo(() => {
  const {setViewSize} = useActions(usersActions)
  const viewSize = useSelector(getViewSize)

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: ViewSizeType,
  ) => {
    setViewSize(newAlignment)
  };

  return (
    <Box>
      <Typography component="div">
        Размер таблицы
      </Typography>
      <ToggleButtonGroup
        sx={{
          '.MuiToggleButtonGroup-grouped': {
            padding: '8px 14px'
          },
        }}
        color="secondary"
        value={viewSize}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value={ViewSizeType.SMALL}>SMALL</ToggleButton>
        <ToggleButton value={ViewSizeType.BIG}>BIG</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
})
