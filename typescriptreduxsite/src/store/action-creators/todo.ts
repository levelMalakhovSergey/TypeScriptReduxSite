import {Dispatch} from "redux";
import axios from "axios";
import {TodoActions, TodoActionsType} from "../../types/todo";


export const fetchTodos = (page =1, limit =10) => {
    return async (dispatch : Dispatch<TodoActions>) => {
        try {
            dispatch({type: TodoActionsType.FETCH_TODOS })
            const  response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params:{_page:page, _limit:limit}
            })
            dispatch({type: TodoActionsType.FETCH_TODOS_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: TodoActionsType.FETCH_TODOS_ERROR, payload:"Произошла ошибка при загрузке списка дел"})
        }
    }
}

export function  setTodoPage (page: number): TodoActions {
    return {type: TodoActionsType.SET_TODO_PAGE, payload: page}
}