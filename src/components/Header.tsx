import { BaseSyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IconButton, Stack, OutlinedInput, Typography } from '@mui/material'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

import { addTodo } from '../features/todoList/todoListSlice'
import { toggleMode } from '../features/mode/modeSlice'
import { RootState } from '../app/store'

const Header = () => {
    const dispatch = useDispatch()
    const mode = useSelector((state: RootState) => state.mode)

    const handleSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value

        dispatch(addTodo(name))

        form.reset()
    }

    const handleClick = () => dispatch(toggleMode())

    return (
        <Stack onSubmit={handleSubmit} component="form">
            <Stack
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 4,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        letterSpacing: 12,
                    }}
                    component="h1"
                    color="common.white"
                    variant="h3"
                >
                    TODO
                </Typography>

                <IconButton
                    onClick={handleClick}
                    sx={{ color: 'common.white' }}
                >
                    {mode === 'light' && <DarkMode />}
                    {mode === 'dark' && <LightMode />}
                </IconButton>
            </Stack>

            <OutlinedInput
                sx={{
                    bgcolor: 'background.paper',
                }}
                autoComplete="off"
                placeholder="Create a new todo..."
                name="name"
                inputProps={{
                    minLength: 3,
                }}
                startAdornment={
                    <RadioButtonUncheckedIcon
                        sx={{
                            mr: { xs: 1, md: 1.5 },
                            color: 'text.disabled',
                        }}
                    />
                }
            />
        </Stack>
    )
}

export default Header
