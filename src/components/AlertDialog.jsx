import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'

const AlertDialog = (props) => {
    const { open, closeDialog, deleteComment } = props

    const buttons = [
        { color: 'cancel', text: 'NO, CANCEL', event: closeDialog },
        { color: 'warning', text: 'YES, DELETE', event: deleteComment },
    ]

    return (
        <Dialog maxWidth='xs' open={open.value}>
            <DialogTitle color='textSecondary'>Delete comment</DialogTitle>
            <DialogContent>
                <DialogContentText color='textPrimary'>
                    Are you sure you want to delete this comment? This will
                    remove the comment and can&apos;t be undone
                </DialogContentText>
                <DialogActions
                    sx={{
                        p: 0,
                        pt: 2,
                    }}
                >
                    {buttons.map(({ color, text, event }) => (
                        <Button
                            key={color}
                            onClick={event}
                            sx={{
                                borderRadius: 2,
                                py: 1.5,
                                lineHeight: 1.4,
                            }}
                            color={color}
                            variant='contained'
                        >
                            {text}
                        </Button>
                    ))}
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default AlertDialog
