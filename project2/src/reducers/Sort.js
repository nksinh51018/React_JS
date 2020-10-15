import * as Type from './../constants/ActionType'

var initState = 0;

var myReducer = (state = initState, action)=>{
    switch(action.type){

        case Type.SORT:{
            
            return parseInt(action.sort);
        }

        default:{
            return state;
        }
    }
}

export default myReducer