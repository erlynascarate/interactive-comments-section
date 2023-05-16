import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    List,
    ListItem,
    Typography,
} from '@mui/material'
import getTimeSinceComment from '../utils/getTimeSinceComment'
import Reply from './Reply'
import CommentButtons from './CommentButtons'
import ToggleButtons from './ToggleButtons'

const Comment = (props) => {
    const {
        content = '',
        createdAt = '',
        replies,
        score = 0,
        user: { username = '' },
    } = props.comment

    const timeAgo = getTimeSinceComment(createdAt)

    const thereIsReply = replies.length > 0

    return (
        <ListItem sx={{ flexDirection: 'column' }}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row-reverse' },
                    borderRadius: 3,
                    padding: { md: 1 },
                    inlineSize: '100%',
                    bgcolor: 'common.white',
                    boxShadow: 'none',
                }}
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
                                currentUsername={props.currentUsername}
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
                        <Typography>{content}</Typography>
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
                        currentUsername={props.currentUsername}
                        username={username}
                    />
                </CardActions>
            </Card>
            {thereIsReply && (
                <List sx={{ paddingBlock: 2, paddingInlineStart: { md: 5 } }}>
                    {replies.map((reply) => (
                        <Reply
                            key={reply.id}
                            currentUsername={props.currentUsername}
                            reply={reply}
                        />
                    ))}
                </List>
            )}
        </ListItem>
    )
}

export default Comment
