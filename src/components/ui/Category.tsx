import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { FC, useContext } from 'react'
import { useState } from 'react';
import { VideoContext } from '../../context';
interface Props {
    category: {
        name: string,
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    };
}

export const Category: FC<Props> = ({ category }) => {
    const { selected, setSelected } = useContext(VideoContext);
    return (
        <button
            className={`flex items-center gap-2 text-white text-sm font-light px-4 py-2 rounded-md bg-gray-800 hover:bg-red-700 transition ${selected === category.name ? 'bg-red-700' : 'md:bg-[#333] '}`}
            onClick={() => setSelected(category.name)}
        >
            <category.icon />
            <span>{category.name}</span>
        </button>
    )
}
