import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Photos, PhotosOfIndex } from './../../models/photos';

interface Initial {
    photos: Photos[];
    isLoading: boolean;
    searchByAlbumId: number;
    photosOfIndex: PhotosOfIndex;
}
const initialState: Initial = {
    photos: [],
    isLoading: false,
    searchByAlbumId: 0,
    photosOfIndex: {} as PhotosOfIndex,
};
const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        GET_PHOTOS: (state, action: PayloadAction<PhotosOfIndex>) => {
            state.isLoading = true;
            state.photosOfIndex = action.payload;
        },
        GET_PHOTOS_OF_INDEX_SUCCESS: (state, action: PayloadAction<Photos[]>) => {
            state.photos = action.payload;
            state.isLoading = false;
        },
        GET_PHOTOS_OF_INDEX_FAILED: (state) => {
            state.isLoading = false;
        },
        SEARCH_BY_ALBUM_ID: (state, action: PayloadAction<number>) => {
            state.searchByAlbumId = action.payload;
        },
    },
});

// Actions
export const photosActions = photosSlice.actions;

// Reducer
const photosReducer = photosSlice.reducer;
export default photosReducer;
