// export const todoListSelector = (state) => {
//     const todoRemainning = state.todoList.filter(todo => todo.name.includes(state.fitlers.search))
//     return todoRemainning;
// }

import { createSelector } from "reselect";

export const searchTextSelector = (state) => {
    return state.fitlers.search;
}

export const todoListSelector = (state) => {
    return state.todoList;
}

export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
    return todoList.filter(todo => todo.name.includes(searchText))
})

