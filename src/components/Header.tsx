import { SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'

import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import { DarkMode } from '@mui/icons-material'

import { addTodo } from '../features/todoList/todoListSlice'

const Header = () => {
    const dispach = useDispatch()

    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
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
                    alignItems: 'center',
                    py: 4,
                }}
            >
                <Typography variant="h3">TODO</Typography>

                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                />

                <IconButton>
                    <DarkMode />
                </IconButton>
            </Stack>

            <TextField
                sx={{
                    '& .MuiInputBase-root': {
                        bgcolor: 'background.paper',
                    },
                }}
                placeholder="Create a new todo..."
                name="name"
                required
                inputProps={{
                    minLength: 3,
                }}
            />
        </Stack>
    )
}

export default Header
