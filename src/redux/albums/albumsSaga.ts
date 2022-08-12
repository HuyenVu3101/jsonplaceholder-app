import { call, put, takeLatest } from 'redux-saga/effects';
import JPAppApi from '../../api/JPAppApi';
import { Albums, UserUpdate } from '../../models';
import { PayloadAction } from '@reduxjs/toolkit';
import { albumsActions } from './albumsSlice';

function* getAlbums(action: PayloadAction<Albums>) {
    try {
        const response: Albums[] = yield call(JPAppApi.getAlbums, action.payload);
        console.log(response);
        yield put(albumsActions.GET_ALBUMS_SUCCESS(response));
    } catch (error) {
        console.log('Error:', error);
        yield put(albumsActions.GET_ALBUMS_FAILED());
    }
}
function* updateUser(action: PayloadAction<UserUpdate>) {
    try {
        console.log(action.payload);
        const res: Albums = yield call(JPAppApi.updateUser, action.payload);
        if (res) {
            yield put(albumsActions.UPDATE_ALBUM_SUCCESS(res));
        }
    } catch (error) {
        console.log('error ', error);
        yield put(albumsActions.UPDATE_USER_FAILED);
    }
}
function* handleDeleteAlbum(action: PayloadAction<number>) {
    try {
        const res: number | string = yield call(JPAppApi.deleteAlbum, action.payload);
        if (res) {
            yield put(albumsActions.SET_ALBUM_DELETE_SUCCESS(action.payload));
        }
    } catch (error) {
        console.log('error ', error);
        yield put(albumsActions.SET_ALBUM_DELETE_FAILED());
    }
}
function* updateAlbum(action: PayloadAction<Albums>) {
    try {
        const res: Albums = yield call(JPAppApi.updateAlbum, action.payload);
        yield put(albumsActions.UPDATE_ALBUM_SUCCESS(res));
    } catch (error) {
        console.log('error ', error);
        yield put(albumsActions.UPDATE_ALBUM_FAILED());
    }
}

export default function* albumsSaga() {
    yield takeLatest(albumsActions.ALBUMS_FOCUS.type, getAlbums);
    yield takeLatest(albumsActions.SET_ALBUM_DELETE.type, handleDeleteAlbum);
    yield takeLatest(albumsActions.UPDATE_ALBUM.type, updateAlbum);
    yield takeLatest(albumsActions.UPDATE_USER.type, updateUser);
}
