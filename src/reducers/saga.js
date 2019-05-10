import {takeEvery, put, call} from 'redux-saga/effects'
import {receiveUsers} from "../actions/Actions";
import * as types from "../constants/ActionTypes";

//Saga worker
export function* getUsersSaga(action) {

    try {
        const data = yield call(() => {
                return fetch('http://localhost:3004/users',{method:'get'})
                    .then(res => res.json())
            }
        );
        yield put(receiveUsers(data))
    } catch (error) {
        console.log(error)
    }
}

export function* updateUserSaga(action) {

    try {
        debugger
        const data = yield call(() => {
                return fetch('http://localhost:3004/users/' + action.user.id,{
                    // credentials: 'same-origin', // 'include', default: 'omit'
                    method: 'PUT', // 'GET', 'PUT', 'DELETE', etc.
                    body: JSON.stringify(action.user), // Coordinate the body type with 'Content-Type'
                     headers: {'Content-Type': 'application/json'}


                })
                    .then(res => res.json())
            }
        );
        yield put(receiveUsers(data))
    } catch (error) {
        console.log(error)
    }
}


//Saga watcher
export function* mySaga() {
    yield takeEvery(types.FETCH_USERS_SAGA, getUsersSaga)
    yield takeEvery(types.UPDATE_USER, updateUserSaga)
    // yield takeEvery(types.FETCH_USERS_SAGA, getUsersSaga)

}