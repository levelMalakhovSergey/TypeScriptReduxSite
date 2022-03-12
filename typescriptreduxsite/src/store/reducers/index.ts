import {combineReducers} from "redux";
import {UserReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";



export  const  rootReducer = combineReducers({
    user: UserReducer,
    todo:todoReducer
})


export type RootState = ReturnType<typeof rootReducer>