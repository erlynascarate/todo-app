import { SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Tabs } from '@mui/material'
import { filters, updateFilter } from '../features/filter/filterSlice'
import { RootState } from '../app/store'

type FiltersProps = {
    inside?: boolean
}

const Filters = (props: FiltersProps) => {
    const { inside } = props

    const dispatch = useDispatch()
    const filter = useSelector((state: RootState) => state.filter)

    const handleChange = (_event: SyntheticEvent, newValue: string) =>
        dispatch(updateFilter(newValue))

    const display = inside ? { xs: 'none', sm: 'flex' } : { sm: 'none' }

    return (
        <Tabs
            onChange={handleChange}
            sx={{
                display,
            }}
            value={filter}
            centered
            TabIndicatorProps={{
                sx: {
                    display: 'none',
                },
            }}
        >
            {filters.map((filter) => (
                <Tab key={filter} label={filter} value={filter} />
            ))}
        </Tabs>
    )
}

export default Filters
