import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch : Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FATCH_USERS})
            const  response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type:UserActionTypes.FATCH_USERS_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: UserActionTypes.FATCH_USERS_ERROR, payload: "Error Happened"})
        }
    }
}