import * as Types from './../constants/ActionType'

export const status =()=>{
    return {
        type: Types.CHANGE_STATUS,
    }
}

export const sort =(sort)=>{
    return {
        type: Types.SORT,
        sort,
    }
}