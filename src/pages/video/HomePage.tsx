import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/system';
import React from 'react'
import { Sidebar, VideoLayout } from '../../components'

export const HomePage = () => {
    return (
        <VideoLayout>
            <Stack
                sx={{
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    }
                }}
            >
                <Box
                    sx={{
                        height: {
                            sx: 'auto',
                            md: '91vh'
                        },
                        borderRight: "1px solid #3d3d3d",
                        px: {
                            sx: 0,
                            md: 2
                        }
                    }}
                >
                    <Sidebar />
                    <Typography
                        variant="body2"
                        sx={{
                            mt: 1.5,
                            color: '#fff'
                        }}
                    >
                        copyrigth @2022 Romel Alexis Media
                    </Typography>
                </Box>
            </Stack>
        </VideoLayout>
    )
}
