import React from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search, AddCircle, Person } from '@mui/icons-material';

export const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 400,
                boxShadow: 'none',
                mr: { sm: 2, md: 4 },
            }}

        >
            <input
                className="w-full h-10 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-gray-400 px-5 bg-slate-800 transition"
                placeholder="Busque su video..."
                value=""
                onChange={() => { }}
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}
