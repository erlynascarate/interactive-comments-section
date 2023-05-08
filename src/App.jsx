import {
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material'

let theme = createTheme({
    typography: {
        fontFamily: 'Rubik, sans-serif',
    },
    palette: {
        primary: {
            main: 'hsl(238, 40%, 52%)',
        },
        warning: {
            main: 'hsl(358, 79%, 66%)',
        },
        text: {
            primary: 'hsl(211, 10%, 45%)',
            secondary: 'hsl(212, 24%, 26%)',
        },
        background: {
            default: 'hsl(228, 33%, 97%)',
        },
    },
})

theme = responsiveFontSizes(theme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
        </ThemeProvider>
    )
}

export default App
