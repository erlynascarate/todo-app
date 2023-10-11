import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../features/todoList/todoListSlice'
import filterReducer from '../features/filter/filterSlice'
import modeReducer from '../features/mode/modeSlice'

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        filter: filterReducer,
        todoList: todoListReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
