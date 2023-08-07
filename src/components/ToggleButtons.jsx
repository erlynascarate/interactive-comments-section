import { useState } from 'react'
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

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
                bgcolor: 'background.default',
            }}
            exclusive
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
                    height: 36,
                    width: 36,
                    fontWeight: 700,
                    textAlign: 'center',
                    lineHeight: 2.5,
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

export default ToggleButtons
