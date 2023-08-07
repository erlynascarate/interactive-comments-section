import useInitialState from './hooks/useInitialState'
import {
    Collapse,
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
import AlertDialog from './components/AlertDialog'
import { TransitionGroup } from 'react-transition-group'

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

theme = createTheme(theme, {
    palette: {
        cancel: theme.palette.augmentColor({
            color: {
                main: 'hsl(211, 10%, 45%)',
            },
            name: 'cancel',
        }),
    },
})

theme = responsiveFontSizes(theme)

function App() {
    const {
        open,
        openDialog,
        openDialogFromReply,
        closeDialog,
        addComment,
        addReply,
        currentUser,
        comments,
        editComment,
        deleteComment,
    } = useInitialState()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    pt: { xs: 2, sm: 3, md: 5 },
                    pb: { xs: 3, sm: 4, md: 6 },
                    px: { sm: 2 },
                    minHeight: '100vh',
                }}
                disableGutters
                maxWidth='md'
            >
                <List>
                    <TransitionGroup>
                        {comments.map((comment) => (
                            <Collapse key={comment.id}>
                                <Comment
                                    addReply={addReply}
                                    comment={comment}
                                    editComment={editComment}
                                    openDialog={openDialog}
                                    currentUser={currentUser}
                                    currentUsername={currentUser.username}
                                    render={(reply) => (
                                        <Collapse key={reply.id}>
                                            <Reply
                                                addReply={addReply}
                                                comment={comment}
                                                currentUser={currentUser}
                                                currentUsername={
                                                    currentUser.username
                                                }
                                                editComment={editComment}
                                                openDialogFromReply={
                                                    openDialogFromReply
                                                }
                                                reply={reply}
                                            />
                                        </Collapse>
                                    )}
                                />
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </List>
                <AddComment addComment={addComment} currentUser={currentUser} />
            </Container>

            <AlertDialog
                open={open}
                closeDialog={closeDialog}
                deleteComment={deleteComment}
            />
        </ThemeProvider>
    )
}

export default App
