import { useState } from 'react'
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    List,
    ListItem,
    TextField,
    Typography,
} from '@mui/material'
import CommentButtons from './CommentButtons'
import ToggleButtons from './ToggleButtons'
import AddReply from './AddReply'
import { TransitionGroup } from 'react-transition-group'

import getTimeSinceComment from '../utils/getTimeSinceComment'

const Comment = (props) => {
    const {
        addReply,
        comment,
        currentUser,
        currentUsername,
        editComment,
        openDialog,
        render,
    } = props

    const {
        content,
        createdAt,
        replies,
        score,
        user: { username },
    } = comment

    const [edit, setEdit] = useState(false)
    const [openReply, setOpenReply] = useState(false)

    const openEdit = () => setEdit(true)
    const closeEdit = () => setEdit(false)

    const toggleReply = () => setOpenReply(!openReply)

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

    const deleteComment = () => openDialog(comment)

    const timeAgo = getTimeSinceComment(createdAt)

    const thereIsReply = replies.length > 0

    return (
        <ListItem
            sx={{ flexDirection: 'column', alignItems: 'stretch', rowGap: 1 }}
        >
            <Card
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row-reverse' },
                    borderRadius: 3,
                    p: { md: 1 },
                    width: '100%',
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
                                openReply={openReply}
                                toggleReply={toggleReply}
                                deleteComment={deleteComment}
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
                            pt: 0,
                            '&:last-child': {
                                pb: 2,
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
                            <Typography sx={{ overflowWrap: 'anywhere' }}>
                                {content}
                            </Typography>
                        )}
                    </CardContent>
                </Box>

                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: { sm: 'start' },
                        p: 2,
                        pt: { xs: 0, sm: 2 },
                        pr: { sm: 0, md: 1 },
                    }}
                >
                    <ToggleButtons score={score} />
                    <CommentButtons
                        edit={edit}
                        openEdit={openEdit}
                        closeEdit={closeEdit}
                        openReply={openReply}
                        toggleReply={toggleReply}
                        deleteComment={deleteComment}
                        currentUsername={currentUsername}
                        username={username}
                    />
                </CardActions>
            </Card>

            <Collapse in={openReply}>
                <AddReply
                    addReply={addReply}
                    comment={comment}
                    currentUser={currentUser}
                    replyingTo={username}
                    toggleReply={toggleReply}
                />
            </Collapse>

            {thereIsReply && (
                <List sx={{ pl: { md: 5 } }}>
                    <TransitionGroup>{replies.map(render)}</TransitionGroup>
                </List>
            )}
        </ListItem>
    )
}

export default Comment
