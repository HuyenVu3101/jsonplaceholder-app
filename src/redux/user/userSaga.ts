import { call, put, takeLatest } from 'redux-saga/effects';
import JPAppApi from '../../api/JPAppApi';
import { User } from '../../models';
import { userActions } from './userSlice';

function* getListUser() {
    try {
        const response: User[] = yield call(JPAppApi.getListUser);
        yield put(userActions.GET_LIST_USERS_SUCCESS(response));
    } catch (error) {
        console.log('Error:', error);
        yield put(userActions.GET_LIST_USERS_FAILED());
    }
}

export default function* userSaga() {
    yield takeLatest(userActions.GET_LIST_USERS.type, getListUser);
}
