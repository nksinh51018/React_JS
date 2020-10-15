import * as Type from './../constants/ActionType'

var initState = '';

var myReducer = (state = initState, action) => {
    switch(action.type){
        case Type.SEARCH:{
            
            return action.keyword;
        }
        default:{
            return state;
        }
    }
}

export default myReducer