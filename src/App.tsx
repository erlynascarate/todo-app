import {
    Container,
    createTheme,
    CssBaseline,
    Paper,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material'

import Layout from './components/Layout'
import Header from './components/Header'
import TodoList from './containers/TodoList'
import Filters from './components/Filters'
import Footer from './components/Footer'

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 650,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    minWidth: 'auto',
                    textTransform: 'capitalize',
                },
            },
        },
    },
    typography: {
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: 15.75,
    },
    palette: {
        primary: {
            main: 'hsl(220, 98%, 61%)',
        },
        background: {
            default: 'hsl(0, 0%, 98%)',
        },
    },
})

theme = responsiveFontSizes(theme)

function App() {
    console.log(theme.breakpoints.up('md'))

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Layout>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 2,
                        px: 3,
                    }}
                    component="main"
                    maxWidth="md"
                >
                    <Header />

                    <TodoList />

                    <Paper>
                        <Filters />
                    </Paper>
                </Container>

                <Footer />
            </Layout>
        </ThemeProvider>
    )
}

export default App
