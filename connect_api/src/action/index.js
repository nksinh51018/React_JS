import * as ActionTypes from '../constant/ActionType'
import callApi from '../ulti/ApiCaller'
export const actFetchProducts = (products) => {
    return {
        type: ActionTypes.FETCH_PRODUCTS,
        products,
    }
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi("products", 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}



export const actDeleteProduct = (id)=>{
    return {
        type: ActionTypes.DELETE_PRODUCT,
        id
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}


export const actAddProduct = (product)=>{
    return {
        type: ActionTypes.ADD_PRODUCT,
        product
    }
}

export const actAddProductRequest = (product)=>{
    return (dispatch)=>{
        return callApi(`products`,'POST',product).then(res=>{
            dispatch(actAddProduct(product))
        })
    }
}

export const actGetProductRequest = (id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,"GET",null).then(res=>{
            dispatch(actGetProduct(res.data))
        })
    }
}

export const actGetProduct = (product)=>{
    return{
        type: ActionTypes.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProduct = (product)=>{
    return{
        type: ActionTypes.UPDATE_PRODUCT,
        product,
    }
}

export const actUpdateProductRequest = (product)=>{
    return dispatch=>{
        return callApi(`products/${product.id}`,'PUT',product).then(res=>{
            dispatch(actUpdateProduct(res.data))
        })
    }
}