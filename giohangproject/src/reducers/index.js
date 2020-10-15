import {combineReducers} from 'redux'
import products from './Products'
import cart from './Cart'
import message from './Message'

const appReducer = combineReducers({
    products,
    cart,
    message,
})

export default appReducer