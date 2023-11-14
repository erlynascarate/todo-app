import { useDispatch } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd'
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Tooltip,
} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ClearIcon from '@mui/icons-material/Clear'

import { check, removeTodo } from '../features/todoList/todoListSlice'

type TodoListItemProps = {
    index: number
    todo: {
        id: `${string}-${string}-${string}-${string}-${string}`
        name: string
        checked: boolean
    }
}

const TodoListItem = (props: TodoListItemProps) => {
    const { index, todo } = props
    const { id, checked, name } = todo

    const dispatch = useDispatch()

    const handleClick = () => dispatch(removeTodo(id))
    const handleCheck = () => dispatch(check(id))

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <ListItem
                    sx={{
                        bgcolor: 'background.paper',
                    }}
                    divider
                    disablePadding
                    secondaryAction={
                        <Tooltip title="Delete todo">
                            <IconButton
                                onClick={handleClick}
                                sx={{
                                    color: 'text.secondary',
                                }}
                            >
                                <ClearIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ListItemButton onClick={handleCheck}>
                        <Checkbox
                            sx={{
                                mr: { md: 0.5 },
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
                                '::first-letter': {
                                    textTransform: 'uppercase',
                                },
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
            )}
        </Draggable>
    )
}

export default TodoListItem
