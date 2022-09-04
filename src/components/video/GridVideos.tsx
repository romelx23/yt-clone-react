import { Box, Stack } from '@mui/material';
import React, { FC, useContext, useEffect } from 'react'
import { VideoContext } from '../../context'
import { useVideo } from '../../hooks';
import { Item } from '../../interfaces';
import { ChannelCard } from './ChannelCard';
import { VideoCard } from './VideoCard';
interface Props {
    videos: Item[],
    channel?: boolean,
    direction?: 'row' | 'column'
}
export const GridVideos: FC<Props> = ({ videos, channel, direction }) => {

    return (
        <Stack
            direction={direction || 'row'}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
        >
            {
                channel &&
                <Box
                    className='video-card'
                    title={videos[0]?.snippet?.title}
                >
                    {
                        videos[0]?.snippet?.channelId && <ChannelCard video={videos[0]} />
                    }
                </Box>
            }
            {
                videos.map((video, index) => {
                    return (
                        <Box
                            className='video-card'
                            key={index}
                            title={video.snippet?.title}
                        >
                            {
                                video.id.videoId && <VideoCard video={video} />
                            }
                        </Box>
                    )
                })
            }

        </Stack>
    )
}
