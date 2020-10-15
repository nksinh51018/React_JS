
import * as TaskTypes from '../constaints/task'
export const fetchListTask = ()=>{
    return {
        type: TaskTypes.FETCH_TASK,
    }
}

export const fetchListTaskSuccess = (data)=>{
    return {
        type: TaskTypes.FETCH_TASK_SUCCESS,
        payload:{
            data
        }
    }
}

export const fetchListTaskFailed = (error)=>{
    return {
        type: TaskTypes.FETCH_TASK_FAILED,
        payload:{
            error
        }
    }
}
export const addTask = (title,description)=>{
    return {
        type: TaskTypes.ADD_TASK,
        payload:{
            title,
            description,
        }
    }
}

export const addTaskSuccess = ()=>{
    return {
        type: TaskTypes.ADD_TASK_SUCCESS,
    }
}

export const addTaskFailed = (error)=>{
    return {
        type: TaskTypes.ADD_TASK_FAILED,
        payload:{
            error
        }
    }
}

export const filterTask = (keyword)=>{
    return {
        type: TaskTypes.FILTER_TASK,
        payload:{
            keyword
        }
    }
}

export const filterTaskSuccess = (data)=>{
    return {
        type: TaskTypes.FILTER_TASK_SUCCESS,
        payload:{
            data
        }
    }
}

// export const fetchListTaskRequest = ()=>{
//     return dispatch =>{
//         dispatch(fetchListTask())
//         taskApi.getList().then(res=>{
//             dispatch(fetchListTaskSuccess(res.data))
//         })
//         .catch(e =>{
//             dispatch(fetchListTaskFailed(e))
//         })
//     }
// }