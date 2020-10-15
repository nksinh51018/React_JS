import * as ActionTypes from '../constant/ActionType'

var initState = {}

const itemEditing = (state = initState, action)=>{

    switch(action.type){
        case ActionTypes.EDIT_PRODUCT:{
            state = action.product;
            return {...state}
        }
        default:
            return {...state}
    }

}

export default itemEditing;