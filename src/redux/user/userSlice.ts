import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../models';
interface initialState {
    users: User[];
    isLoading: boolean;
}
const initialState: initialState = {
    users: [],
    isLoading: false,
};
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        GET_LIST_USERS: (state) => {
            state.isLoading = true;
        },
        GET_LIST_USERS_SUCCESS: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        GET_LIST_USERS_FAILED: (state) => {
            state.isLoading = false;
        },
    },
});

// Actions
export const userActions = userSlice.actions;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
