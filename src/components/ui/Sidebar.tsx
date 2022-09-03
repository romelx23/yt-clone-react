import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../../utils/constants'
import { Category } from './Category';

export const Sidebar = () => {
    return (
        <Stack
            direction="row"
            sx={{
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
                    md: 1
                }
            }}
        >
            {
                categories.map((category) => {
                    return <Category category={category} />
                })
            }
        </Stack>
    )
}
