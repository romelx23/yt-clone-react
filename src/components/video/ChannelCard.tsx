import React, { FC } from 'react'
import { Item } from '../../interfaces';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl } from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';
interface Props {
    video: Item;
}

export const ChannelCard: FC<Props> = ({ video }) => {
    return (
        <Box
            borderRadius={20}
            width='100%'
            sx={{
                display: 'flex',
                AlignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Link
                to={video.snippet.channelId ? `/canal/${video.snippet.channelId}` : `/canal/${demoChannelUrl}`}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        AlignItems: 'center',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    <CardMedia
                        image={video.snippet.thumbnails.high.url || demoThumbnailUrl}
                        alt={video.snippet.title}
                        sx={{ width: 180, height: 180, borderRadius: '50%', mb: 2, mx: 'auto', border: '1px solid #e3e3e3' }}
                        component='img'
                    />
                    <Typography textAlign={'center'} className='video-title' variant="subtitle2" fontWeight="bold" color="#fff" >{video.snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray' }} />
                    </Typography>
                </CardContent>

            </Link>
            {/* <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <p
                className='video-title'
            >{video.snippet.title}</p> */}
        </Box>
    )
}
