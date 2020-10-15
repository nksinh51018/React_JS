import * as Types from './../constants/ActionType'
import * as Messages from './../constants/Message'

var initState = Messages.MSG_WELCOME;

const myReducer = (state = initState,action) =>{
    switch (action.type){
        case Types.CHANGE_MESSAGE:{
            return action.message;
        }
        default:{
            return state;
        }
    }
}

export default myReducer;