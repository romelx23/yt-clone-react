import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { FC } from 'react'
interface Props {
    category: {
        name: string,
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    };
}

export const Category: FC<Props> = ({ category }) => {
    return (
        <button
            className='flex items-center gap-2 text-white text-sm font-light px-4 py-2 rounded-md hover:bg-red-700'
        >
            <category.icon />
            <span>{category.name}</span>
        </button>
    )
}
