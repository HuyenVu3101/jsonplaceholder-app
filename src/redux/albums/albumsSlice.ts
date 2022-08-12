import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Albums, UserUpdate } from './../../models/albums';
import { User } from './../../models/user';

interface initial {
    albums: Albums[];
    userFocus: User;

    userUpdate: boolean;
    userUpdateSuccess: boolean;

    isLoading: boolean;
    isLoadingSuccess: boolean;

    checkingUpdate: boolean;
    checkingUpdateSuccess: boolean;

    checkingDelete: boolean;
    checkingDeleteSuccess: boolean;
}

const initialState: initial = {
    albums: [],
    userFocus: {} as User,

    userUpdate: false,
    userUpdateSuccess: false,

    isLoading: false,
    isLoadingSuccess: false,

    checkingUpdate: false,
    checkingUpdateSuccess: false,

    checkingDelete: false,
    checkingDeleteSuccess: false,
};

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        GET_ALBUMS: (state) => {
            state.isLoading = true;
        },
        GET_ALBUMS_SUCCESS: (state, action: PayloadAction<Albums[]>) => {
            state.albums = action.payload;
            state.isLoading = false;
            state.isLoadingSuccess = true;
        },
        GET_ALBUMS_FAILED: (state) => {
            state.isLoadingSuccess = false;
        },

        ALBUMS_FOCUS: (state, action: PayloadAction<User>) => {
            state.userFocus = action.payload;
        },

        UPDATE_USER: (state, action: PayloadAction<UserUpdate>) => {
            state.userUpdate = true;
        },
        UPDATE_USER_SUCCESS: (state, action: PayloadAction<UserUpdate>) => {
            const data = action.payload;
            state.userFocus = { ...state.userFocus, ...data };
            state.userUpdate = false;
            state.userUpdateSuccess = true;
        },
        UPDATE_USER_FAILED: (state) => {
            state.userUpdateSuccess = false;
        },

        UPDATE_ALBUM: (state, action: PayloadAction<Albums>) => {
            state.checkingUpdate = true;
        },
        UPDATE_ALBUM_SUCCESS: (state, action: PayloadAction<Albums>) => {
            state.albums.unshift(action.payload);
            state.checkingUpdate = false;
            state.checkingUpdateSuccess = true;
        },
        UPDATE_ALBUM_FAILED: (state) => {
            state.checkingUpdateSuccess = false;
        },

        SET_ALBUM_DELETE: (state, action: PayloadAction<number | string>) => {
            state.checkingDelete = true;
        },
        SET_ALBUM_DELETE_SUCCESS: (state, action: PayloadAction<number | string>) => {
            const newState = state.albums.filter((album) => album.id !== action.payload);
            state.albums = newState;

            state.checkingDelete = false;
            state.checkingDeleteSuccess = true;
        },
        SET_ALBUM_DELETE_FAILED: (state) => {
            state.checkingDeleteSuccess = false;
        },
    },
});

// Actions
export const albumsActions = albumsSlice.actions;

// Reducer
const albumsReducer = albumsSlice.reducer;
export default albumsReducer;
