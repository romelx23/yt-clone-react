import React from 'react'
import { HomePage, VideoPage, SearchPage, ChannelPage } from '../pages';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
export const DashboardRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/buscar/:name" element={<SearchPage />} />
                <Route path="/video/:name" element={<VideoPage />} />
                <Route path="/canal/:name" element={<ChannelPage />} />
            </Routes>
        </BrowserRouter>
    )
}
