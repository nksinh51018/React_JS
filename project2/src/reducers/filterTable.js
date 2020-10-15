import * as Type from './../constants/ActionType'

var initState = {
    name: '',
    status: -1
};

var myReducer = (state = initState, action) => {
    switch(action.type){
        case Type.FILTER_TABLE:{
            return action.filter;
        }
        default:{
            return state;
        }
    }
} 

export default myReducer;