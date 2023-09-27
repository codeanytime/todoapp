const initState = [
    { id: 1, name: 'Learn Redux', completed: true, priority: 'Medium' },
    { id: 2, name: 'Learn Javascript', completed: false, priority: 'High' },
    { id: 3, name: 'Learn AWS', completed: true, priority: 'Low' }
]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            console.log(action.payload);
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default todoListReducer;