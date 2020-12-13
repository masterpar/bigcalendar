import {combineReducers} from "redux"
import {uiReducer} from "./uiReducer"
import {calendarReducer} from "./calendarReducer"
import {auhReducer} from "./auhReducer"

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: auhReducer
})

