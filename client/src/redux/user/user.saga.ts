import { takeLatest, put, all, call } from "redux-saga/effects";
import { signInSuccess, signInFailure } from "./user.actions";
import { IUserSignInInfo } from "./user.interfaces";
import UserActionTypes from "./user.types";
import { store } from "../store";

export function* signIn({
  payload: { username, password },
}: {
  payload: IUserSignInInfo;
}) {
  try {
    // const { user } = yield axios.post("/signIn", { username, password });
    const user = { id: "1234" };
    yield put(signInSuccess(user));
  } catch (e) {
    yield put(signInFailure(e));
  }
}
export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START as any, signIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield store.getValue().user;
    console.log("Checking user session", userAuth);
  } catch (e) {
    put(signInFailure(e));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(isUserAuthenticated),
    // call(onSignOutStart),
    // call(onSignUpStart),
    // call(onSignUpSuccess),
  ]);
}
