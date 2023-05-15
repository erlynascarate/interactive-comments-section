import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    ListItem,
    Typography,
} from '@mui/material'
import getTimeSinceComment from '../utils/getTimeSinceComment'
import ReplyButton from './ReplyButton'
import ToggleButtons from './ToggleButtons'

const Reply = (props) => {
    const {
        content = '',
        createdAt = '',
        replyingTo,
        score = 0,
        user: { username = '' },
    } = props.reply

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
        </ListItem>
    )
}

export default Reply
