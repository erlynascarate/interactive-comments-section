import { Button } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply'

const ReplyButton = ({ display = { sm: 'none' } }) => (
    <Button
        sx={{
            display,
            '&:hover': {
                color: 'primaryHover.main',
            },
            fontWeight: 700,
            textTransform: 'capitalize',
        }}
        startIcon={<ReplyIcon />}
    >
        Reply
    </Button>
)

export default ReplyButton
