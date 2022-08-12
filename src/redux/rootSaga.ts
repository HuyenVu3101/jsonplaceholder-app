import { all } from 'redux-saga/effects';
import userSaga from './user/userSaga';
import albumsSaga from './albums/albumsSaga';
import photosSaga from './photos/photosSaga';

export default function* rootSaga() {
    yield all([userSaga(), albumsSaga(), photosSaga()]);
}
