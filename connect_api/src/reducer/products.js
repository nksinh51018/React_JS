import * as ActionTypes from '../constant/ActionType'
let initState = [];

const products = (state = initState, action)=>{
    switch (action.type){
        case ActionTypes.FETCH_PRODUCTS:{
            state = [...action.products];
            return [...state]
        }
        case ActionTypes.DELETE_PRODUCT:{
            let index = findIndex(state,action.id);
            if(index > -1){
                state.splice(index,1);
            }
            return [...state]
        }
        case ActionTypes.ADD_PRODUCT:{
            console.log(2)
            state.push(action.product)
            return [...state]
        }
        case ActionTypes.UPDATE_PRODUCT:{
            let index = findIndex(state,action.product.id);
            if(index > -1){
                state[index] = action.product
            }
            return [...state]
        }
        default:
            return [...state]
    }
}

const findIndex = (products,id)=>{
    let result = -1;
    products.forEach((product,index) => {
        if(product.id === id){
            result = index;
        }
    });
    return result;
}

export default products;