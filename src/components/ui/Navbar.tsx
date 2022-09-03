import React from 'react'
import { IconButton, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { Person } from '@mui/icons-material'
import { logo } from '../../utils/constants';
export const Navbar = () => {
    return (
        <Stack
            direction={'row'}
            alignItems="center"
            p={2}
            sx={{ postion: 'sticky', background: '#202020', top: 0, zIndex: 1, justifyContent: 'space-between' }}
        >
            <Link to={'/'}>
                <img src={logo} alt="logo" width="100" />
            </Link>
            <SearchBar />
            <IconButton sx={{ p: '10px' }}>
                <Person />
            </IconButton>
        </Stack>
    )
}
