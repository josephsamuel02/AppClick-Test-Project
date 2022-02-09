import { combineReducers } from "redux";

import { LogIn, RegisterUser } from "./User";
import { FormDetail } from "./FormDetail";
export const rootReducer = combineReducers({
    LogIn,
    RegisterUser,
    FormDetail,
});
