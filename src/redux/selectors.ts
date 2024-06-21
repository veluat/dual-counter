import {AppRootStateType} from "./store";
import {InitialStateType} from "../common/types";

export const getCountState = (state: AppRootStateType): InitialStateType => state.count