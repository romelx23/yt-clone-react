import React, { useContext, useState } from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search, AddCircle, Person } from '@mui/icons-material';
import { VideoContext } from '../../context';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
    const { setSelected } = useContext(VideoContext);
    const [value, setValue] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        setSelected(value);
        setValue('');
        navigate('/buscar/' + value);
        setSearchParams({ q: value });
    }
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
            onSubmitCapture={handleSubmit}
        >
            <input
                className="w-full h-10 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-gray-400 px-5 bg-slate-800 transition"
                placeholder="Busque su video..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}
