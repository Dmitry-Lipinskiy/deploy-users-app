import { Dispatch } from "redux";
import http from "../../http";
import { UserActionType, UsersAction } from "../types/users";

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({type: UserActionType.GET_USERS, payload: response.data})
  }
}

// http.get('users').then((res) => {
//   setUsers(res.data);
//   console.log(res.data);
// }).catch((err) => console.log(err));