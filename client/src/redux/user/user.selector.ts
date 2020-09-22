import { createSelector } from "reselect";
import { IUser, IUserState } from "./user.interfaces";

const selectUser = (state: any): IUserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user): IUser | null => user.currentUser
);
