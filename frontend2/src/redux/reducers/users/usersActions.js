import {usersSlice} from "./usersSlice";
import * as requestFromServer from "./usersCrud"

const {actions}= usersSlice;

export const fetchUsers= () => dispatch  => {
    dispatch(actions.startCall());
    return requestFromServer.fetchUsers().then(response => {
          dispatch(actions.usersFetched({
              users:response.data
          }))
    }).catch(error =>{
        error.clientMessage=`Error retrieving uses because ${error}`;
        console.log(JSON.stringify(error));
        dispatch(actions.catchError({error}));
    });

}