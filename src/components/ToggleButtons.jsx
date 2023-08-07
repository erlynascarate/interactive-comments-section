import { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const ToggleButtons = (props) => {
    const { score } = props

    const [alignment, setAlignment] = useState(null)
    const [number, setNumber] = useState(score)

    const handleAlignment = (_event, newAlignment) => {
        setAlignment(newAlignment)

        switch (newAlignment) {
            case 'plus':
                setNumber(score + 1)
                break

            case 'minus':
                setNumber(score - 1)
                break

            default:
                setNumber(score)
                break
        }
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
                    color: 'primary.hover',
                }}
                value='plus'
            >
                <AddIcon fontSize='inherit' />
            </ToggleButton>
            <ToggleButton
                sx={{
                    border: 'none !important',
                    width: 36,
                    fontWeight: 700,
                    lineHeight: 1,
                    '&.Mui-disabled': {
                        color: 'primary.main',
                    },
                }}
                disabled
                value='score'
            >
                {number}
            </ToggleButton>
            <ToggleButton
                sx={{
                    border: 'none !important',
                    color: 'primary.hover',
                    '&.Mui-disabled': {
                        pointerEvents: 'initial',
                        cursor: 'not-allowed',
                    },
                }}
                disabled={score === 0 && true}
                value='minus'
            >
                <RemoveIcon fontSize='inherit' />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleButtons
