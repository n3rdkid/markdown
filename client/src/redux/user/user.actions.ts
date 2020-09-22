import { IUser } from "./user.interfaces";
import UserActionTypes from "./user.types";
export const signInStart = (usernameAndPassword: {
  username: string;
  password: string;
}) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: usernameAndPassword,
});

export const signInSuccess = (user: IUser) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (user: IUser) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
