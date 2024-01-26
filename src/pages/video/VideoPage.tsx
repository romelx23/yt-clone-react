import { Stack, Box } from '@mui/system';
import React, { useEffect, useContext } from 'react'
import ReactPlayer from 'react-player';
import { GridVideos, VideoLayout } from '../../components';
import { Link, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useVideo } from '../../hooks';
import { VideoContext } from '../../context';
import { CheckCircle } from '@mui/icons-material';

export const VideoPage = () => {
    const { name } = useParams();
    const { loadVideosDetails, loadVideosRelated } = useVideo();
    const { videos, videosDetails } = useContext(VideoContext);
    const data = videosDetails[0]?.snippet;
    useEffect(() => {
        loadVideosDetails(name as string);
        console.log(videosDetails);
        loadVideosRelated(name as string);
    }, [name])

    if (!videosDetails[0]) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <VideoLayout>
            <Box
                minHeight="91vh"
            >
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    flex={1}
                >
                    {/* <Box flex={1}> */}
                    <Stack
                        flex={1}
                        sx={{
                            position: 'sticky',
                            top: 80,
                        }}
                    >
                        <Box sx={{
                            width: '100%', position: {
                                sx: 'relative',
                                md: 'sticky',
                            }, top: '86px', display: 'flex', flexDirection: 'column',
                            backgroundColor: '#333',
                            padding: '10px',
                        }}>
                            <div className="flex h-full min-h-[400px] lg:min-h-[600px] max-w-[1000px] mb-3">
                                <ReactPlayer
                                    width="100%"
                                    height="100%"
                                    config={{
                                        youtube: {
                                            playerVars: {
                                                showinfo: 1,
                                            }
                                        }
                                    }}

                                    style={{ width: '100%', height: '100%', minHeight: "400px" }} url={`https://www.youtube.com/watch?v=${ name }`} controls={true} />
                            </div>
                            <h1
                                // color="#fff"
                                // variant="h5"
                                // fontWeight="bold"
                                className='text-white md:text-xl text-base font-bold'
                            >
                                {data?.title}
                            </h1>
                            <Typography
                                color="#fff"
                                variant="subtitle1"
                                fontWeight="bold"
                            >
                                {
                                    data.description.length > 100 ?
                                        data?.description.slice(0, 100) + '...'
                                        :
                                        data?.description
                                }
                            </Typography>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                sx={{
                                    color: '#fff',
                                }}
                                py={1}
                                px={2}
                            >
                                <Link to={data && `/canal/${ data?.channelId }`}>
                                    <Typography
                                        variant="subtitle1"
                                        color="#fff"
                                    >
                                        {data?.channelTitle}
                                        <CheckCircle
                                            sx={{
                                                fontSize: '12px',
                                                color: 'gray',
                                                ml: 1
                                            }}
                                        />
                                    </Typography>
                                </Link>
                                <Stack>
                                    <Typography
                                        variant="body1"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        1.2M views
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                    {/* </Box> */}
                    <GridVideos videos={videos} direction="column" />
                </Stack>
            </Box>
        </VideoLayout>
    )
}
