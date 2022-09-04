import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/system';
import React, { useContext, useEffect } from 'react'
import { GridVideos, Sidebar, VideoLayout } from '../../components'
import { VideoContext } from '../../context';
import { useVideo } from '../../hooks';

export const HomePage = () => {
    const { loadVideos } = useVideo();
    const { videos, selected } = useContext(VideoContext);
    useEffect(() => {
        loadVideos();
        console.log('cargando videos');
    }, [selected])
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
                    position={'sticky'}
                    top={80}
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
                </Box>
                <Box p={2}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            color: '#fff'
                        }}
                    >
                        Videos {selected}
                    </Typography>
                    <GridVideos videos={videos} channel={true} />
                    <Typography
                        variant="body2"
                        textAlign="center"
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
