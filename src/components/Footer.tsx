import { Link, Stack, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                py: { xs: 5, lg: 6 },
                px: 2,
                textAlign: 'center',
            }}
            component="footer"
        >
            <Typography color="text.secondary">
                Drag and drop to reorder list
            </Typography>
            <Link
                title="To do icons"
                href="https://www.flaticon.com/free-icons/to-do"
                target="_blank"
                rel="noopener"
            >
                To do icons created by SBTS2018 - Flaticon
            </Link>
        </Stack>
    )
}

export default Footer
