import React from 'react'
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
    return (
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ mr: '20px' }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
            />
        </Box>
    )
}

export default SearchBar