import { Box, Button } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const CustomButton = (props) => {
    const { color, children, display, hover, icon } = props

    return (
        <Button
            sx={{
                display,
                '&:hover': {
                    color: hover,
                },
                fontWeight: 700,
                textTransform: 'capitalize',
            }}
            color={color}
            startIcon={icon()}
        >
            {children}
        </Button>
    )
}

const CommentButtons = (props) => {
    const {
        display = { xs: 'inline-flex', sm: 'none' },
        currentUsername,
        username,
    } = props

    if (currentUsername === username)
        return (
            <Box sx={{ display, flexWrap: 'wrap', justifyContent: 'end' }}>
                <CustomButton
                    color='warning'
                    hover='warningHover.main'
                    icon={() => <DeleteIcon />}
                >
                    Detele
                </CustomButton>
                <CustomButton
                    hover='primaryHover.main'
                    icon={() => <EditIcon />}
                >
                    Edit
                </CustomButton>
            </Box>
        )

    return (
        <CustomButton
            display={display}
            hover='primaryHover.main'
            icon={() => <ReplyIcon />}
        >
            Reply
        </CustomButton>
    )
}

export default CommentButtons
