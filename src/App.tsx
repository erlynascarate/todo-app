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
            lg: 1150,
            xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    textTransform: 'capitalize',

                    color: theme.palette.text.secondary,
                    ':hover': {
                        color: theme.palette.text.primary,
                    },
                }),
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 16px -4px hsla(0, 0%, 0%, 0.2)',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: ({ theme }) => ({
                    minWidth: 'auto',
                    fontWeight: 700,
                    textTransform: 'capitalize',

                    ':hover': {
                        color: theme.palette.text.primary,
                    },

                    '&.Mui-selected:hover': {
                        color: theme.palette.primary.main,
                    },
                }),
            },
        },
    },
    typography: {
        fontFamily: '"Josefin Sans", sans-serif',
    },
    palette: {
        primary: {
            main: 'hsl(220, 98%, 61%)',
        },
        text: {
            primary: 'hsl(235, 19%, 35%)',
            secondary: 'hsl(236, 9%, 61%)',
            disabled: 'hsl(233, 11%, 84%)',
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

            <Layout>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 2.5,
                        px: 3,
                    }}
                    component="main"
                    maxWidth="md"
                >
                    <Header />

                    <TodoList />

                    <Paper
                        sx={{
                            display: {
                                sm: 'none',
                            },
                        }}
                    >
                        <Filters />
                    </Paper>
                </Container>

                <Footer />
            </Layout>
        </ThemeProvider>
    )
}

export default App
