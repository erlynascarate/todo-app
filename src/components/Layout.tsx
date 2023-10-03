import { Stack, styled } from '@mui/material'
import bgMobileLight from '../assets/bg-mobile-light.jpg'
import bgDesktopLight from '../assets/bg-desktop-light.jpg'

const Image = styled(Stack)({
    paddingTop: 10,
    paddingBottom: 10,
    minHeight: '100vh',
    backgroundImage: `url(${bgMobileLight})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',

    '@media (min-width: 1020px)': {
        backgroundImage: `url(${bgDesktopLight})`,
    },
})

export default Image
