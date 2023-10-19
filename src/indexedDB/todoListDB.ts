import { openDB } from 'idb'

const dbName = 'todo'
const dbVersion = 14

const todoListStore = 'todoList'
const todoListStoreSchema = {
    keyPath: 'id',
}

const themeStore = 'theme'

const initialTodoList = [
    {
        id: crypto.randomUUID(),
        name: 'Complete online JavaScript course',
        checked: true,
    },
    {
        id: crypto.randomUUID(),
        name: 'Job around the park 3x',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: '10 minutes meditation',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Read for 1 hour',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Pick up groceries',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Complete Todo App on Frontend Mentor',
        checked: false,
    },
]

const db = await openDB(dbName, dbVersion, {
    upgrade(database) {
        if (!database.objectStoreNames.contains(todoListStore)) {
            const store = database.createObjectStore(
                todoListStore,
                todoListStoreSchema
            )

            initialTodoList.forEach((todo, index) => {
                const initialTodo = { ...todo, index }

                store.add(initialTodo)
            })
        }
        if (!database.objectStoreNames.contains(themeStore)) {
            database.createObjectStore(themeStore)
        }
    },
})

type dataType = {
    id: `${string}-${string}-${string}-${string}-${string}`
    name: string
    checked: boolean
    index: number
}

// To Do List
async function updateData(data: dataType) {
    const tx = db.transaction(todoListStore, 'readwrite')
    const store = tx.objectStore(todoListStore)

    store.put(data)

    await tx.done
}

type idType = `${string}-${string}-${string}-${string}-${string}`
async function deleteData(id: idType) {
    const tx = db.transaction(todoListStore, 'readwrite')
    const store = tx.objectStore(todoListStore)

    store.delete(id)

    await tx.done
}

// Theme
async function updateTheme(theme: string) {
    const tx = db.transaction(themeStore, 'readwrite')
    const store = tx.objectStore(themeStore)

    store.put({ theme }, themeStore)

    await tx.done
}

async function getTheme() {
    const tx = db.transaction(themeStore, 'readonly')
    const store = tx.objectStore(themeStore)

    const initialTheme = { theme: 'dark' }

    const { theme } = (await store.get(themeStore)) || initialTheme

    return theme
}

async function getTodoList() {
    const tx = db.transaction(todoListStore, 'readonly')
    const store = tx.objectStore(todoListStore)

    const todoList: dataType[] = await store.getAll()
    todoList.sort((itemA, itemB) => itemA.index - itemB.index)

    return todoList
}

const initialTheme = await getTheme()
const todoListData = await getTodoList()

export { todoListData, initialTheme, updateData, deleteData, updateTheme }
