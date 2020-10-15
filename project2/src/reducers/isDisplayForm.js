import * as Types from './../constants/ActionType'

let initState = false;

let myReducer = (state = initState,action)=>{

    switch(action.type){
        case Types.TOGGLE_FORM:{
            state = !state;
            return state
        }
        case Types.OPEN_FORM:{
            return true;
        }
        case Types.CLOSE_FORM:{
            return false;
        }
        default:{
            return state;
        }
    }
}

export default myReducer;