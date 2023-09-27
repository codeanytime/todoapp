import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoListSlice";
import { combineReducers } from "redux";

// const rootReducer = (state = {}, action) => {
//     // switch (action.type) {
//     //     case 'todoList/addTodo':
//     //         console.log(action.payload);
//     //         return {
//     //             ...state,
//     //             todoList: [
//     //                 ...state.todoList,
//     //                 action.payload
//     //             ]
//     //         }
//     //     case 'filters/searchFilterChange':
//     //         return {
//     //             ...state,
//     //             fitlers: {
//     //                 ...state.fitlers,
//     //                 search: action.payload
//     //             }
//     //         }

//     //     default:
//     //         return state;
//     // }
//     return {
//         fitlers: filtersReducer(state.fitlers, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
});

export default rootReducer;