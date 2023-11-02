import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    deleteData,
    todoListData,
    updateData,
} from '../../indexedDB/todoListDB'

const initialState = todoListData

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo = {
                id: crypto.randomUUID(),
                name: action.payload,
                checked: false,
                index: 0,
            }

            state.unshift(newTodo)

            state.forEach((stateTodo, index) => {
                const { id, name, checked } = stateTodo

                const todo = {
                    id,
                    name,
                    checked,
                    index,
                }

                updateData(todo)
            })
        },
        reorder: (state, action) => {
            const { startIndex, endIndex } = action.payload

            const [removed] = state.splice(startIndex, 1)
            state.splice(endIndex, 0, removed)

            state.forEach((todo, index) => {
                if (todo.index !== index) {
                    updateData({ ...todo, index })
                }
            })
        },
        removeTodo: (state, action) => {
            const id = action.payload

            const foundTodo = state.find((todo) => todo.id === id)

            if (foundTodo) {
                const index = state.indexOf(foundTodo)

                state.splice(index, 1)
                deleteData(id)
            }
        },
        check: (state, action) => {
            const id = action.payload

            const foundTodo = state.find((todo) => todo.id === id)

            if (foundTodo) {
                foundTodo.checked = !foundTodo.checked

                const { id, name, checked, index } = foundTodo

                const updatedTodo = {
                    id,
                    name,
                    checked,
                    index,
                }

                updateData(updatedTodo)
            }
        },
        clearCompleted: (state) => {
            const clearedList = state.filter((todo) => {
                if (todo.checked) {
                    deleteData(todo.id)
                } else {
                    return true
                }
            })

            return clearedList
        },
    },
})

export const { addTodo, removeTodo, reorder, check, clearCompleted } =
    todoListSlice.actions

export default todoListSlice.reducer
