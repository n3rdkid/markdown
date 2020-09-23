import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";
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

export function* signOut() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START as any, signOut);
}

export function* signUp() {
  try {
    // const user= yield axios.post()
    const user = { id: "1" };
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START as any, signUp);
}

export function* signInAfterSignUp(payload: any) {
  try {
    const user = { id: "1234" };
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS as any, signInAfterSignUp);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield store.getValue().user;
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
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
