import { IUserState, IUserAction, IUser, IUserError } from "./user.interfaces";
import UserActionTypes from "./user.types";

const initialUserState: IUserState = {
  currentUser: null,
  error: null,
};

const userReducer = (
  state = initialUserState,
  action: IUserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload as IUser,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return { ...state, error: action.payload as IUserError };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    default:
      return state;
  }
};
export { userReducer };
