import { BaseSyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'

import { IconButton, Stack, OutlinedInput, Typography } from '@mui/material'
import DarkMode from '@mui/icons-material/DarkMode'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

import { addTodo } from '../features/todoList/todoListSlice'

const Header = () => {
    const dispach = useDispatch()

    const handleSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value

        dispach(addTodo(name))

        form.reset()
    }

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

                <IconButton sx={{ color: 'common.white' }}>
                    <DarkMode />
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
                            mr: 1,
                            color: 'text.disabled',
                        }}
                    />
                }
            />
        </Stack>
    )
}

export default Header
