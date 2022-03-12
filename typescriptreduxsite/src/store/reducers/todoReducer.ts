import {TodoActions, TodoActionsType, TodoState} from "../../types/todo";

const InitialState:TodoState = {
    todos: [],
    page:1,
    error: null,
    limit:10,
    loading:false
}
export  const todoReducer = (state= InitialState, action:TodoActions):TodoState => {
    switch (action.type)
    {
        case TodoActionsType.FETCH_TODOS: return {...state,loading:true}
        case TodoActionsType.FETCH_TODOS_ERROR: return {...state, loading:false,error: action.payload}
        case TodoActionsType.FETCH_TODOS_SUCCESS: return {...state,loading:false,todos:action.payload}
        case TodoActionsType.SET_TODO_PAGE: return {...state,page: action.payload}
        default:{
            return state
        }
    }
}