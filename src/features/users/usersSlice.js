import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

import { execGet } from '../../api/usersClient';

//Creating reducer and action
export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await execGet('users');
    return response.data.data;
});

const usersAdapter = createEntityAdapter();

const usersSlice = createSlice(
    {
        name: 'users',
        initialState: usersAdapter.getInitialState(),
        reducers: {
            usersLoaded: usersAdapter.setAll
        },
        extraReducers: {
            [fetchUsers.fulfilled] : (state, action) => {
                usersAdapter.setAll( state, action.payload );
            }
        }
    }
);

export const selectors = usersAdapter.getSelectors( state => state.users );
export default usersSlice.reducer;
export const { usersLoaded } = usersSlice.actions;