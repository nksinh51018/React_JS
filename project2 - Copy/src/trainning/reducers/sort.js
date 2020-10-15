var initState = {
        by: 'status',
        status: 1
}

var myReducer = (state = initState, action) => {
    if (action.type === 'SORT') {
        let {by,status} = action.sort;
        return{
            by: by,
            status: status
        }
    }
    return state;
}

export default myReducer;