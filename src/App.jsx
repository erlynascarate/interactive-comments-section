import {
    Container,
    createTheme,
    CssBaseline,
    List,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material'
import { useReducer } from 'react'
import AddComment from './components/AddComment'
import Comment from './components/Comment'
import data from './data/data.json'

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: 'Rubik, sans-serif',
    },
    palette: {
        common: {
            white: 'hsl(0, 0%, 100%)',
        },
        primary: {
            main: 'hsl(238, 40%, 52%)',
        },
        primaryHover: {
            main: 'hsl(239, 57%, 85%)',
        },
        warning: {
            main: 'hsl(358, 79%, 66%)',
        },
        warningHover: {
            main: 'hsl(357, 100%, 86%)',
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

function commentsReducer(comments, action) {
    // switch (action.type) {
    // }
}

function App() {
    const [comments, dispatch] = useReducer(commentsReducer, data.comments)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                sx={{
                    paddingBlockStart: { xs: 2, sm: 3, md: 5 },
                    paddingBlockEnd: { xs: 3, sm: 4, md: 6 },
                    paddingInline: { sm: 2 },
                }}
                disableGutters
                maxWidth='md'
            >
                <List>
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </List>
                <AddComment />
            </Container>
        </ThemeProvider>
    )
}

export default App
