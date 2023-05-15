import { Avatar, Button, Card, CardContent, TextField } from '@mui/material'

const AddComment = () => {
    return (
        <Card
            sx={{
                marginInline: 2,
                borderRadius: 3,
                padding: { md: 1 },
                bgcolor: 'common.white',
                boxShadow: 'none',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <TextField
                    sx={{
                        flexGrow: 1,
                        inlineSize: { xs: '100%', sm: 'auto' },
                    }}
                    label='Add a comment'
                    multiline
                    rows={3}
                />
                <Avatar
                    sx={{
                        order: { sm: '-1' },
                    }}
                />
                <Button
                    sx={{
                        '&:hover': {
                            bgcolor: 'primaryHover.main',
                        },
                    }}
                    size='large'
                    variant='contained'
                >
                    Send
                </Button>
            </CardContent>
        </Card>
    )
}

export default AddComment
