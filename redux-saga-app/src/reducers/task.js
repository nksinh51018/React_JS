import * as TaskConstaint from '../constaints/task'
import { toastError,toastSuccess } from '../common/toastMessage';
const initialState = {
    listTask: []
};

const reducer = (state = initialState, action) => {
    let data;
    let error;
    switch (action.type) {
        case TaskConstaint.FETCH_TASK:
            return { ...state, listTask: [] }
        case TaskConstaint.FETCH_TASK_SUCCESS:
            data = action.payload.data;
            return { ...state, listTask: data }
        case TaskConstaint.FETCH_TASK_FAILED:
            error = action.payload.error;
            toastError(error)
            return { ...state, listTask: [] }
        case TaskConstaint.FILTER_TASK:
            return { ...state }
        case TaskConstaint.FILTER_TASK_SUCCESS:
            data = action.payload.data;
            return { ...state, listTask: data }
        case TaskConstaint.ADD_TASK:
            return { ...state}
        case TaskConstaint.ADD_TASK_SUCCESS:
            toastSuccess('Them thanh cong')
            return { ...state}
        case TaskConstaint.ADD_TASK_FAILED:
            error  = action.payload;
            toastError(error)
            return { ...state}
        default:
            return { ...state }
    }
}

export default reducer