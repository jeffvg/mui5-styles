import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = ({ children, color, disabled, size, sx, onClick, variant }) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </Button>
    )
}

export default CommonButton