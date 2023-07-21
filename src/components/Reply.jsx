import { useState } from 'react'
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    ListItem,
    TextField,
    Typography,
} from '@mui/material'
import CommentButtons from './CommentButtons'
import ToggleButtons from './ToggleButtons'

import getTimeSinceComment from '../utils/getTimeSinceComment'

const Reply = (props) => {
    const { comment, currentUsername, editComment, reply } = props

    const {
        content,
        createdAt,
        replyingTo,
        score,
        user: { username },
    } = reply

    const [edit, setEdit] = useState(false)

    const openEdit = () => setEdit(true)
    const closeEdit = () => setEdit(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const content = event.target.content.value

        const editedReply = {
            ...reply,
            content,
        }

        const replies = comment.replies.map((reply) => {
            if (reply.id === editedReply.id) {
                return editedReply
            }

            return reply
        })

        const editedComment = {
            ...comment,
            replies,
        }

        editComment(editedComment)
        closeEdit()
    }

    const timeAgo = getTimeSinceComment(createdAt)

    return (
        <ListItem
            sx={{
                borderInlineStart: '2px solid hsl(223, 19%, 93%)',
                paddingInlineStart: { sm: 4, md: 5 },
                paddingInlineEnd: 0,
            }}
        >
            <Card
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row-reverse' },
                    borderRadius: 3,
                    padding: { md: 1 },
                    inlineSize: '100%',
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
                        {!edit && (
                            <Typography>
                                <Typography
                                    color='primary'
                                    component='span'
                                    fontWeight={700}
                                >
                                    @{replyingTo}
                                </Typography>{' '}
                                {content}
                            </Typography>
                        )}
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
        </ListItem>
    )
}

export default Reply
