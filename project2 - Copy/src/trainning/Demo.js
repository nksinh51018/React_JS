import { createStore } from 'redux';
import { status, sort } from './actions/index'
import myReducer from './reducers/index'

const store = createStore(myReducer);
store.dispatch(status());
console.log(store.getState())
store.dispatch(sort({
    by: 'status',
    status: -1
}));
console.log(store.getState())

