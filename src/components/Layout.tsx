import { Stack, styled } from '@mui/material'
import bgDesktopLight from '../assets/bg-desktop-light.jpg'

const Image = styled(Stack)(({ theme }) => {
    const minWidthDesktop = theme.breakpoints.up('lg')

    return {
        paddingTop: 16,
        minHeight: '100vh',
        backgroundImage: `url(${bgDesktopLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 240px',
        backgroundPositionX: 'center',

        [minWidthDesktop]: {
            backgroundSize: '100%',
        },
    }
})

export default Image
