import * as UITypes from '../constaints/UI'

const initialState = {
    isLoadding: false,
}

const reducer = (state = initialState,action)=>{
    switch (action.type){
        case UITypes.SHOW_LOADDING:
            state.isLoadding = true;
            return {...state}
        case UITypes.HIDE_LOADDING:
            state.isLoadding = false;
            return {...state}
        default:
            return {...state}
    }
    
}

export default reducer;