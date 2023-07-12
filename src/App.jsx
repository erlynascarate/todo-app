import {
    Container,
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    Stack,
    ThemeProvider,
} from '@mui/material'

let theme = createTheme({
    typography: {
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 15.75,
    },
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        background: {
            default: 'hsl(0, 0%, 98%)',
        },
    },
})

theme = responsiveFontSizes(theme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack>
                <Container component='main'></Container>
            </Stack>
        </ThemeProvider>
    )
}

export default App
