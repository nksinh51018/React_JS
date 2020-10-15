import {combineReducers} from 'redux'
import tasks from './Tasks'
import isDisplayForm from './isDisplayForm'
import itemEditting from './itemEditting'
import filterTable from './filterTable'
import search from './Search'
import sort from './Sort'
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditting,
    filterTable,
    search,
    sort
});

export default myReducer;