import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import albumsSlice from './albums/albumsSlice';
import photosSlice from './photos/photosSlice';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userSlice,
        albums: albumsSlice,
        photos: photosSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
