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
import Reply from './Reply'
import ReplyButton from './ReplyButton'
import ToggleButtons from './ToggleButtons'

const Comment = (props) => {
    const {
        content = '',
        createdAt = '',
        replies,
        score = 0,
        user: { username = '' },
    } = props.comment

    const thereIsReply = replies.length > 0

    return (
        <ListItem sx={{ flexDirection: 'column' }}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row-reverse' },
                    borderRadius: 3,
                    padding: { md: 1 },
                    bgcolor: 'common.white',
                    boxShadow: 'none',
                }}
            >
                <Box>
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
                            <ReplyButton
                                display={{ xs: 'none', sm: 'inline-flex' }}
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
                        subheader={<Typography>{createdAt}</Typography>}
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
                    <ReplyButton />
                </CardActions>
            </Card>
            {thereIsReply && (
                <List sx={{ paddingBlock: 2, paddingInlineStart: { md: 5 } }}>
                    {replies.map((reply) => (
                        <Reply key={reply.id} reply={reply} />
                    ))}
                </List>
            )}
        </ListItem>
    )
}

export default Comment
