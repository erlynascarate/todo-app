import { useDispatch } from 'react-redux'
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
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
                <IconButton
                    onClick={handleClick}
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <ClearIcon />
                </IconButton>
            }
        >
            <ListItemButton onClick={handleCheck}>
                <Checkbox
                    sx={{
                        color: 'text.disabled',
                    }}
                    checked={checked}
                    edge="start"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={
                        <DoneIcon
                            sx={{
                                borderRadius: '50%',
                                p: 0.45,
                                color: 'common.white',
                                background:
                                    'linear-gradient(135deg,hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
                            }}
                        />
                    }
                />
                <ListItemText
                    sx={{
                        '::first-letter': { textTransform: 'uppercase' },
                        overflowWrap: 'anywhere',

                        ...(checked && {
                            color: 'text.secondary',
                            textDecoration: 'line-through',
                        }),
                    }}
                    primary={name}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default TodoListItem
