export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
// action creator
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}