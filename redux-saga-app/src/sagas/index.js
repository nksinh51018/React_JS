import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects'
import * as TaskTypes from '../constaints/task'
import { getList,addTask } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../constaints';
import { fetchListTaskSuccess, fetchListTaskFailed, filterTaskSuccess, addTaskSuccess, addTaskFailed, fetchListTask } from '../actions/task';
import { showLoadding, hideLoadding } from '../actions/UI';
import { hideModal } from '../actions/modal';
function* watchFetchListTaskAcion() {
    while (true) {
        yield take(TaskTypes.FETCH_TASK)
        yield put(showLoadding())
        const res = yield call(getList)
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListTaskSuccess(data))
        }
        else {
            yield put(fetchListTaskFailed(data))
        }
        yield delay(1000)
        yield put(hideLoadding())
    }
}

function* filterTaskSaga({ payload }) {
    yield delay(500)
    const { keyword } = payload;
    const list = yield select(state => state.task.listTask);
    if (list.length > 0) {
        const filterTask = list.filter(task => task.productName.trim().toLowerCase().includes(keyword.trim().toLowerCase()))
        yield put(filterTaskSuccess(filterTask))
    }
}

function* addTaskSaga({payload}){
    yield put(showLoadding());
    const {title, description} = payload
    const res = yield call(addTask,{
        title,
        description,
        status: STATUSES[0].value
    })
    console.log(res);
    const {data, status} = res;
    if(status === STATUS_CODE.SUCCESS){
        yield put(addTaskSuccess())
        yield put(hideModal())
        yield put(fetchListTask())
    }
    else{
        yield put(addTaskFailed(data))
    }
    yield delay(500)
    yield put(hideLoadding())
}


function* rootSaga() {
    yield fork(watchFetchListTaskAcion)
    yield takeLatest(TaskTypes.FILTER_TASK, filterTaskSaga);
    yield takeEvery(TaskTypes.ADD_TASK,addTaskSaga);
}

export default rootSaga;