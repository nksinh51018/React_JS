import * as Types from '../constants/ActionType'

let initState = {
    id: '',
    name: '',
    status: true
};

let myReducer = (state = initState,action)=>{

    switch(action.type){
        case Types.EDIT_TASK:{
            return action.task;
        }
        default:{
            return state;
        }
    }
}

export default myReducer;