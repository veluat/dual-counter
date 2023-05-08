import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localstorage-utils";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    count: counterReducer,
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        count: store.getState().count
    })
})
