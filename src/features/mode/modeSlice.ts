import { createSlice } from '@reduxjs/toolkit'
import { initialTheme, updateTheme } from '../../indexedDB/todoListDB'

const initialState = initialTheme

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleMode: (state) => {
            const mode = state === 'light' ? 'dark' : 'light'

            updateTheme(mode)
            return mode
        },
    },
})

export const { toggleMode } = modeSlice.actions

export default modeSlice.reducer
