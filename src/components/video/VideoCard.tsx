import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Item } from '../../interfaces'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../../utils/constants';

interface Props {
    video: Item;
}

export const VideoCard: FC<Props> = ({ video }) => {
    return (
        <Card
            sx={{
                width: {
                    xs: '320px'
                }
            }}
        >
            <Link
                to={video.id ? `/video/${video.id.videoId}` : `/channel/${video.snippet?.channelId}`}
            >
                <CardMedia
                    image={video.snippet?.thumbnails.high.url}
                    alt={video.snippet?.title}
                    sx={{ width: 358, height: 180 }}
                    component='img'
                />
            </Link>
            <CardContent
                sx={{
                    backgroundColor: '#333',
                    height: 100,
                }}
            >
                <Link to={video.id ? `/video/${video.id.videoId}` : `/channel/${video.snippet?.channelId}`}>
                    <Typography className='video-title' variant="subtitle1" fontWeight="bold" color="#fff" >{video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
                </Link>
                <Link to={video.snippet?.channelId ? `/canal/${video.snippet?.channelId}` : `/canal/${demoChannelUrl}`}>
                    <Typography className='video-title' variant="subtitle2" fontWeight="bold" color="#fff" >{video.snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray' }} />
                    </Typography>
                </Link>
            </CardContent>
            {/* <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <p
                className='video-title'
            >{video.snippet.title}</p> */}

        </Card>
    )
}
