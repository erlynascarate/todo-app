import { useDispatch, useSelector } from 'react-redux'
import {
    Button,
    Collapse,
    List,
    ListItem,
    Paper,
    Typography,
} from '@mui/material'
import TodoListItem from '../components/TodoListItem'
import Filters from '../components/Filters'
import { RootState } from '../app/store'
import { clearCompleted } from '../features/todoList/todoListSlice'
import { TransitionGroup } from 'react-transition-group'

const TodoList = () => {
    const dispatch = useDispatch()
    const todoList = useSelector((state: RootState) => state.todoList)
    const filter = useSelector((state: RootState) => state.filter)

    const filteredTodoList = todoList.filter((todo) => {
        switch (filter) {
            case 'all':
                return todo
            case 'active':
                return todo.checked === false && todo
            case 'completed':
                return todo.checked === true && todo
        }
    })

    const itemsLeft = todoList.reduce((itemsLeft, todo) => {
        return todo.checked === false ? itemsLeft + 1 : itemsLeft
    }, 0)

    const handleClick = () => dispatch(clearCompleted())

    return (
        <Paper>
            <List disablePadding>
                <TransitionGroup>
                    {filteredTodoList.map((todo) => (
                        <Collapse key={todo.id}>
                            <TodoListItem todo={todo} />
                        </Collapse>
                    ))}
                </TransitionGroup>

                <ListItem
                    sx={{
                        color: 'text.secondary',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography>{itemsLeft} items left</Typography>

                    <Filters inside />

                    <Button onClick={handleClick}>Clear Completed</Button>
                </ListItem>
            </List>
        </Paper>
    )
}

export default TodoList
