import { Stack, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                py: { xs: 5, lg: 6 },
            }}
            component="footer"
        >
            <Typography color="text.secondary">
                Drag and drop to reorder list
            </Typography>
        </Stack>
    )
}

export default Footer
