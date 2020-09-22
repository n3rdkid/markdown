import UserActionTypes from "./user.types";

export interface IUser {
  /**
   * ID of the user
   */
  id?: string;
}

export interface IUserSignInInfo {
  username: string;
  password: string;
}

export interface IUserState {
  /**
   * Current User Session
   */
  currentUser: IUser | null;
  /**
   * Any error related to user sign in / sign up / sign out / user session
   */
  error: IUserError | null;
}

export interface IUserError {
  error: {
    //   Error code
    code?: number;
    // What action caused the error
    type?: UserActionTypes;
    // Message to be displayed to the user
    message?: string;
  };
}
export interface IUserAction {
  type: UserActionTypes;
  payload: IUser | IUserError;
}
