import { Avatar, Button, Card, CardContent, TextField } from '@mui/material'

const AddReply = (props) => {
    const { addReply, comment, currentUser, replyingTo, toggleReply } = props

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const id = crypto.randomUUID()
        const content = form.content.value
        const createdAt = new Date()

        const reply = {
            id,
            content,
            createdAt,
            replyingTo,
            score: 0,
            user: currentUser,
        }

        const replies = [...comment.replies, reply]

        const editedComment = {
            ...comment,
            replies,
        }

        addReply(editedComment)

        toggleReply()
        form.reset()
    }

    return (
        <Card
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 3,
                padding: { md: 1 },
                boxShadow: 'none',
            }}
            component='form'
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <TextField
                    sx={{
                        flexGrow: 1,
                        inlineSize: { xs: '100%', sm: 'auto' },
                    }}
                    label='Add a comment'
                    multiline
                    maxRows={5}
                    minRows={3}
                    name='content'
                    required
                />
                <Avatar
                    sx={{
                        order: { sm: '-1' },
                    }}
                />
                <Button
                    sx={{
                        '&:hover': {
                            bgcolor: 'primary.hover',
                        },
                    }}
                    size='large'
                    type='submit'
                    variant='contained'
                >
                    Send
                </Button>
            </CardContent>
        </Card>
    )
}

export default AddReply
