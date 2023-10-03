import { Stack, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                py: 5,
            }}
            component="footer"
        >
            <Typography>Drag and drop to reorder list</Typography>
        </Stack>
    )
}

export default Footer
