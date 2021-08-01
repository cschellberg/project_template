import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import { usersSlice } from './reducers/users/usersSlice';


export const rootReducer = combineReducers({
    users: usersSlice.reducer,
});

export function* rootSaga() {

}