export interface UserState {
    users: any[],
    loading: boolean;
    error: null | string;
}
// interface UserAction {
//     type: string;
//     payload?: any;
// }
export enum UserActionTypes {
    FATCH_USERS= 'FATCH_USERS',
    FATCH_USERS_SUCCESS= 'FATCH_USERS_SUCCESS',
    FATCH_USERS_ERROR= 'FATCH_USERS_ERROR',
}
interface FetchUsersActions {
    type: UserActionTypes.FATCH_USERS
}
interface FetchUsersSuccessActions {
    type: UserActionTypes.FATCH_USERS_SUCCESS, payload: any[]
}
interface FetchUsersErrorActions {
    type: UserActionTypes.FATCH_USERS_ERROR, payload: string
}

export type UserAction = FetchUsersActions | FetchUsersErrorActions | FetchUsersSuccessActions;
