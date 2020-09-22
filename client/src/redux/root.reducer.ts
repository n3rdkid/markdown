import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user/user.reducer";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  user: userReducer,
});
const persistConfig = { key: "root", storage };
export default persistReducer(persistConfig, rootReducer);
