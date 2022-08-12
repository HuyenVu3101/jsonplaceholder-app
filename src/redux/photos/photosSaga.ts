import { call, put, takeLatest } from 'redux-saga/effects';
import JPAppApi from '../../api/JPAppApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { Photos, PhotosOfIndex } from '../../models/photos';
import { photosActions } from './photosSlice';

function* getPhotosOfIndex(action: PayloadAction<PhotosOfIndex>) {
    try {
        const response: Photos[] = yield call(JPAppApi.getPhotosOfIndex, action.payload);
        yield put(photosActions.GET_PHOTOS_OF_INDEX_SUCCESS(response));
    } catch (error) {
        console.log('Error:', error);
        yield put(photosActions.GET_PHOTOS_OF_INDEX_FAILED());
    }
}

export default function* photosSaga() {
    yield takeLatest(photosActions.GET_PHOTOS.type, getPhotosOfIndex);
}
