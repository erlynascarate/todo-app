import { PaletteMode } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
    name: 'mode',
    initialState: 'dark' as PaletteMode,
    reducers: {
        toggleMode: (state) => (state === 'light' ? 'dark' : 'light'),
    },
})

export const { toggleMode } = modeSlice.actions

export default modeSlice.reducer
