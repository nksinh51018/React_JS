import { combineReducers } from "redux";
import task from './task'
import ui from './UI'
import {reducer as fromReducer} from 'redux-form'
import modal from './modal'
const appReducer = combineReducers({
    task,
    ui,
    modal,
    form: fromReducer
})

export default appReducer;