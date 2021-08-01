import {createSlice} from '@reduxjs/toolkit';

const initialUsersState = {}

export const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersState,
    reducers: {
        catchError: (state, action) => {
            return {
                ...state,
                error: `${action.type}: ${action.payload.error}`
            }
        },
        startCall: (state) => {
            return {
                ...state,
                error: null
            }
        },
        usersFetched: (state, action) => {
            const {users} = action.payload;
            let newState = {
                ...state,
                users: users
            }
            return newState;
        }
    }

});












