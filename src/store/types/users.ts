export interface UsersState {
    users: [];
}

export enum UserActionType {
    GET_USERS = 'GET_USERS'
}

interface GetUsersAction {
    type: UserActionType.GET_USERS
    payload: [];
}

export type UsersAction = GetUsersAction
