import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'

const ReplyButton = ({ display = { sm: 'none' } }) => (
    <Button
        sx={{
            display,
            '&:hover': {
                color: 'hsl(239, 57%, 85%)',
            },
            textTransform: 'capitalize',
        }}
        startIcon={<ReplyIcon />}
    >
        Reply
    </Button>
)

const ToggleButtons = ({ score }) => {
    const [alignment, setAlignment] = useState(null)

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment)
    }

    return (
        <ToggleButtonGroup
            onChange={handleAlignment}
            sx={{
                flexDirection: { sm: 'column' },
                bgcolor: 'hsl(228, 33%, 97%)',
            }}
            exclusive
            size='small'
            value={alignment}
        >
            <ToggleButton
                sx={{
                    border: 'none',
                    color: 'hsl(239, 57%, 85%)',
                }}
                value='plus'
            >
                <AddIcon fontSize='inherit' />
            </ToggleButton>
            <Typography
                sx={{
                    blockSize: 28,
                    inlineSize: 28,
                    textAlign: 'center',
                    lineHeight: 2,
                }}
                color='primary'
                component='span'
            >
                {score}
            </Typography>
            <ToggleButton
                sx={{
                    border: 'none',
                    color: 'hsl(239, 57%, 85%)',
                }}
                value='minus'
            >
                <RemoveIcon fontSize='inherit' />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

const Reply = (props) => {
    const {
        content = '',
        createdAt = '',
        score = 0,
        user: { username = '' },
    } = props.reply

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row-reverse' },
                borderRadius: 3,
                bgcolor: 'hsl(0, 0%, 100%)',
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
                    paddingInlineEnd: { xs: 2, sm: 0 },
                }}
            >
                <ToggleButtons score={score} />
                <ReplyButton />
            </CardActions>
        </Card>
    )
}

export default Reply
