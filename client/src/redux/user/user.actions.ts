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
export const signInFailure = (error: any) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});
export const signOutFailure = (error: any) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signUpStart = (userCredentials: any) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});
export const signUpSuccess = (user: IUser) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFailure = (error: any) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
