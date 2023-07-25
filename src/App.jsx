import useInitialState from './hooks/useInitialState'
import {
    Container,
    createTheme,
    CssBaseline,
    List,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material'
import Comment from './components/Comment'
import Reply from './components/Reply'
import AddComment from './components/AddComment'

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
            hover: 'hsl(239, 57%, 85%)',
        },
        warning: {
            main: 'hsl(358, 79%, 66%)',
            hover: 'hsl(357, 100%, 86%)',
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
    const { addComment, addReply, currentUser, comments, editComment } =
        useInitialState()

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
                        <Comment
                            key={comment.id}
                            addReply={addReply}
                            comment={comment}
                            editComment={editComment}
                            currentUser={currentUser}
                            currentUsername={currentUser.username}
                            render={(reply) => (
                                <Reply
                                    key={reply.id}
                                    addReply={addReply}
                                    comment={comment}
                                    currentUser={currentUser}
                                    currentUsername={currentUser.username}
                                    editComment={editComment}
                                    reply={reply}
                                />
                            )}
                        />
                    ))}
                </List>
                <AddComment addComment={addComment} currentUser={currentUser} />
            </Container>
        </ThemeProvider>
    )
}

export default App
