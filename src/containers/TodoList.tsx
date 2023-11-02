import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { TransitionGroup } from 'react-transition-group'
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
import { clearCompleted, reorder } from '../features/todoList/todoListSlice'

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

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result
        if (!destination || source.index === destination.index) return

        dispatch(
            reorder({ startIndex: source.index, endIndex: destination.index })
        )
    }

    return (
        <Paper>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="todoList">
                    {(provided) => (
                        <List
                            disablePadding
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <TransitionGroup>
                                {filteredTodoList.map((todo, index) => (
                                    <Collapse key={todo.id}>
                                        <TodoListItem
                                            index={index}
                                            todo={todo}
                                        />
                                    </Collapse>
                                ))}

                                {provided.placeholder}
                            </TransitionGroup>

                            <ListItem
                                sx={{
                                    color: 'text.secondary',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography>{itemsLeft} items left</Typography>

                                <Filters inside />

                                <Button onClick={handleClick}>
                                    Clear Completed
                                </Button>
                            </ListItem>
                        </List>
                    )}
                </Droppable>
            </DragDropContext>
        </Paper>
    )
}

export default TodoList
