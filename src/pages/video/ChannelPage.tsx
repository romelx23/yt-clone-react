import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ChannelCard, GridVideos, VideoLayout } from '../../components'
import { VideoContext } from '../../context';
import { useVideo } from '../../hooks';

export const ChannelPage = () => {
    const { videos } = useContext(VideoContext)
    const { loadVideosByChannel } = useVideo();
    const params = useParams();

    useEffect(() => {
        loadVideosByChannel(params.name as string);
        console.log(params)
    }, [])

    return (
        <VideoLayout>
            <Box
            >
                <div
                    style={{
                        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                        height: '20vh',
                        position: 'relative',
                        marginBottom: '8rem'
                    }}
                >
                    <Box
                        style={{
                            paddingTop: '70px',
                        }}
                        title={videos[0]?.snippet.title}
                    >
                        {
                            videos[0]?.snippet.channelId && <ChannelCard video={videos[0]} />
                        }
                    </Box>
                </div>
                <GridVideos videos={videos} channel={false} />
            </Box>
        </VideoLayout>
    )
}
