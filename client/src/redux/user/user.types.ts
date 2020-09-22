enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
  CHECK_USER_SESSION = "CHECK_USER_SESSION",
  /**
   * Sign in related actions
   */
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  SIGN_IN_START = "SIGN_IN_START",
 /**
   * Sign out related actions
   */
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
  SIGN_OUT_START = "SIGN_OUT_START",
 /**
   * Sign up related actions
   */
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE = "SIGN_UP_FAILURE",
  SIGN_UP_START = "SIGN_UP_START",
}
export default UserActionTypes;
