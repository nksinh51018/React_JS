import * as Types from './../constants/ActionType'
var data = JSON.parse(localStorage.getItem('CART'));
var initState = data ? data : []

const myReducter = (state = initState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART: {
            let { product, quantity } = action;
            let index = findProductInCart(state, product.id);
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        }
        case Types.DELETE_PRODUCT_IN_CART:{
            let {id} = action;
            let index = findProductInCart(state,id);
            let n = state.length;
            if(index >= 0 && index < n){
                state.splice(index,1);
            }
            console.log(index)
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        }
        case Types.UPDATE_PRODUCT_IN_CART:{
            let {id} = action.product;
            let quantity = action.quantity;
            let index = findProductInCart(state,id);
            let n = state.length;
            if(index >=0 && index < n){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        }
        default: {
            return [...state];
        }
    }
}

var findProductInCart = (state, id) => {
    let n = state.length;
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (state[i].product.id === id) {
                return i;
            }
        }
    }
    return -1;

}

export default myReducter;