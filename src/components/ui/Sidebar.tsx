import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { categories } from '../../utils/constants'
import { Category } from './Category';

export const Sidebar = () => {
    return (
        <Stack
            direction="row"
            sx={{
                backgroundColor: "#333",
                overflowY: 'auto',
                height: {
                    sx: 'auto',
                    md: '95%'
                },
                flexDirection: {
                    md: 'column'
                },
                paddingTop: {
                    md: 1
                },
                gap: {
                    xs: .8,
                    md: 1
                }
            }}
        >
            {
                categories.map((category) => {
                    return <Category category={category} key={category.name} />
                })
            }
        </Stack>
    )
}
