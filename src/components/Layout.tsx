import { Stack, styled } from '@mui/material'
import bgMobileLight from '../assets/bg-mobile-light.jpg'
import bgMobileDark from '../assets/bg-mobile-dark.jpg'
import bgDesktopLight from '../assets/bg-desktop-light.jpg'
import bgDesktopDark from '../assets/bg-desktop-dark.jpg'

const Image = styled(Stack)(({ theme }) => {
    const mobileImage =
        theme.palette.mode === 'light'
            ? `url(${bgMobileLight})`
            : `url(${bgMobileDark})`

    const desktopImage =
        theme.palette.mode === 'light'
            ? `url(${bgDesktopLight})`
            : `url(${bgDesktopDark})`

    const minWidthDesktop = theme.breakpoints.up('lg')

    return {
        paddingTop: 16,
        minHeight: '100vh',
        backgroundImage: mobileImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 240px',
        backgroundPositionX: 'center',

        '@media (min-width: 450px)': {
            backgroundImage: desktopImage,
        },

        [minWidthDesktop]: {
            backgroundSize: '100%',
        },
    }
})

export default Image
