import { createSlice } from '@reduxjs/toolkit'

export const filters = ['all', 'active', 'completed']

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'all',
    reducers: {
        updateFilter: (_state, action) => action.payload,
    },
})

export const { updateFilter } = filterSlice.actions

export default filterSlice.reducer
