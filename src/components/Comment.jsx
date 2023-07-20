import { useState } from 'react'
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    List,
    ListItem,
    TextField,
    Typography,
} from '@mui/material'
import Reply from './Reply'
import CommentButtons from './CommentButtons'
import ToggleButtons from './ToggleButtons'
import getTimeSinceComment from '../utils/getTimeSinceComment'

const Comment = (props) => {
    const [edit, setEdit] = useState(false)

    const openEdit = () => setEdit(true)
    const closeEdit = () => setEdit(false)

    const { comment, currentUsername, editComment } = props

    const {
        content,
        createdAt,
        replies,
        score,
        user: { username },
    } = comment

    const handleSubmit = (event) => {
        event.preventDefault()

        const content = event.target.content.value

        const editedComment = {
            ...comment,
            content,
        }

        editComment(editedComment)
        closeEdit()
    }

    const timeAgo = getTimeSinceComment(createdAt)

    const thereIsReply = replies.length > 0

    return (
        <ListItem sx={{ flexDirection: 'column' }}>
            <Card
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row-reverse' },
                    borderRadius: 3,
                    padding: { md: 1 },
                    inlineSize: '100%',
                    bgcolor: 'common.white',
                    boxShadow: 'none',
                }}
                component='form'
            >
                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <CardHeader
                        sx={{
                            '& .MuiCardHeader-content': {
                                display: 'flex',
                                flexWrap: 'wrap',
                                columnGap: 2,
                            },
                        }}
                        avatar={<Avatar />}
                        action={
                            <CommentButtons
                                display={{ xs: 'none', sm: 'inline-flex' }}
                                edit={edit}
                                openEdit={openEdit}
                                closeEdit={closeEdit}
                                currentUsername={currentUsername}
                                username={username}
                            />
                        }
                        title={
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                }}
                                color='textSecondary'
                            >
                                {username}
                            </Typography>
                        }
                        subheader={<Typography>{timeAgo}</Typography>}
                    />
                    <CardContent
                        sx={{
                            paddingBlockStart: 0,
                            '&:last-child': {
                                paddingBlockEnd: 2,
                            },
                        }}
                    >
                        {edit && (
                            <TextField
                                defaultValue={content}
                                fullWidth
                                multiline
                                name='content'
                                required
                            />
                        )}
                        {!edit && <Typography>{content}</Typography>}
                    </CardContent>
                </Box>

                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: { sm: 'start' },
                        padding: 2,
                        paddingBlockStart: { xs: 0, sm: 2 },
                        paddingInlineEnd: { xs: 2, sm: 0, md: 1 },
                    }}
                >
                    <ToggleButtons score={score} />
                    <CommentButtons
                        edit={edit}
                        openEdit={openEdit}
                        closeEdit={closeEdit}
                        currentUsername={currentUsername}
                        username={username}
                    />
                </CardActions>
            </Card>

            {thereIsReply && (
                <List sx={{ paddingBlock: 2, paddingInlineStart: { md: 5 } }}>
                    {replies.map((reply) => (
                        <Reply
                            key={reply.id}
                            currentUsername={currentUsername}
                            reply={reply}
                        />
                    ))}
                </List>
            )}
        </ListItem>
    )
}

export default Comment
