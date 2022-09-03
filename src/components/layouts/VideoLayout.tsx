import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar'

interface Props {
    children: React.ReactNode
}

export const VideoLayout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
