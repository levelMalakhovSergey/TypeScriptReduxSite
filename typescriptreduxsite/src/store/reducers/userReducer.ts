import {UserAction, UserActionTypes, UserState} from "../../types/user";


const initialState:UserState = {
    users: [],
    loading: false,
    error: null
}
export const UserReducer = (state=initialState, action:UserAction) : UserState | undefined  => {
    switch (action.type) {
        case UserActionTypes.FATCH_USERS:
            return {loading:true,error: null, users:[]}
        case UserActionTypes.FATCH_USERS_SUCCESS:
            return {loading:false,error: null, users:action.payload}
        case UserActionTypes.FATCH_USERS_ERROR:
            return {loading:false,error: action.payload, users:[]}
        default: return state
    }
}