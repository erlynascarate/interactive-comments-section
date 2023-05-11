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

const ToggleButtons = () => {
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
                5
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

const Comment = (props) => {
    // const {
    //     content,
    //     createdAt,
    //     score,
    //     user: { username },
    // } = props

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
                            amyrobson
                        </Typography>
                    }
                    subheader={<Typography>createdAt</Typography>}
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate qui numquam repellendus, eligendi id nostrum
                        corrupti doloribus commodi, nihil suscipit quibusdam
                        minus adipisci, minima impedit debitis natus saepe porro
                        est!
                    </Typography>
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
                <ToggleButtons />
                <ReplyButton />
            </CardActions>
        </Card>
    )
}

export default Comment
