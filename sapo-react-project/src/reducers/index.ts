import {combineReducers} from 'redux'
import products from './Products'
import categoryList from './CategoryList'
import categoryItem from './CategoryItem'
const appReducer = combineReducers({
    products,
    categoryList,
    categoryItem,
})

export default appReducer;