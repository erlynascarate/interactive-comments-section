import { Box, Button } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const CustomButton = (props) => {
    const {
        event,
        color,
        children,
        display,
        hover,
        icon,
        type = 'button',
        textTransform = 'capitalize',
        variant,
    } = props

    if (icon)
        return (
            <Button
                onClick={event}
                sx={{
                    display,
                    '&:hover': {
                        color: hover,
                    },
                    fontWeight: 700,
                    textTransform,
                }}
                color={color}
                startIcon={icon()}
                variant={variant}
            >
                {children}
            </Button>
        )

    return (
        <Button
            onClick={event}
            sx={{
                display,
                marginInlineStart: 1,
                '&:hover': {
                    color: hover,
                },
                fontWeight: 700,
                textTransform,
            }}
            color={color}
            type={type}
            variant={variant}
        >
            {children}
        </Button>
    )
}

const CommentButtons = (props) => {
    const {
        display = { xs: 'inline-flex', sm: 'none' },
        currentUsername,
        edit,
        openEdit,
        closeEdit,
        username,
    } = props

    if (currentUsername === username)
        return (
            <Box sx={{ display, flexWrap: 'wrap', justifyContent: 'end' }}>
                {edit && (
                    <CustomButton
                        event={closeEdit}
                        color='warning'
                        hover='warning.hover'
                    >
                        Cancel
                    </CustomButton>
                )}
                {!edit && (
                    <CustomButton
                        color='warning'
                        hover='warning.hover'
                        icon={() => <DeleteIcon />}
                    >
                        Detele
                    </CustomButton>
                )}
                {edit && (
                    <CustomButton
                        hover='primary.hover'
                        textTransform='uppercase'
                        type='submit'
                        variant='contained'
                    >
                        Update
                    </CustomButton>
                )}
                {!edit && (
                    <CustomButton
                        event={openEdit}
                        hover='primary.hover'
                        icon={() => <EditIcon />}
                    >
                        Edit
                    </CustomButton>
                )}
            </Box>
        )

    return (
        <CustomButton
            display={display}
            hover='primary.hover'
            icon={() => <ReplyIcon />}
        >
            Reply
        </CustomButton>
    )
}

export default CommentButtons
