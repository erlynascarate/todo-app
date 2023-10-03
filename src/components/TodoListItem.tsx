import { useDispatch } from 'react-redux'
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { check, removeTodo } from '../features/todoList/todoListSlice'

type TodoListItemProps = {
    todo: {
        id: `${string}-${string}-${string}-${string}-${string}`
        name: string
        checked: boolean
    }
}

const TodoListItem = (props: TodoListItemProps) => {
    const { todo } = props
    const { id, checked, name } = todo

    const dispatch = useDispatch()

    const handleClick = () => dispatch(removeTodo(id))
    const handleCheck = () => dispatch(check(id))

    return (
        <ListItem
            divider
            disablePadding
            secondaryAction={
                <IconButton onClick={handleClick}>
                    <ClearIcon />
                </IconButton>
            }
        >
            <ListItemButton onClick={handleCheck}>
                <Checkbox checked={checked} edge="start" />
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}

export default TodoListItem
