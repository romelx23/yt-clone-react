import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/system';
import React, { useContext, useEffect } from 'react'
import { GridVideos, Sidebar, VideoLayout } from '../../components'
import { VideoContext } from '../../context';
import { useVideo } from '../../hooks';

export const SearchPage = () => {
    const { loadVideos } = useVideo();
    const { videos, selected } = useContext(VideoContext);
    useEffect(() => {
        loadVideos();
        console.log('cargando videos', videos.length);
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
                        fontSize={{
                            xs: '1rem',
                            md: '1.5rem'
                        }}
                        style={{
                            marginBottom: '10px'
                        }}
                    >
                        Resultados de la busqueda de :
                        <span
                            style={{
                                color: '#fafafa',
                                marginLeft: '5px'
                            }}
                        >
                            {selected}
                        </span>
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
