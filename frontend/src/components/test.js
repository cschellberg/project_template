import {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../redux/reducers/users/usersActions'

console.log("2222 "+process.env.REACT_APP_BACKEND_URL);

function Test () {

    function UserRow( user){
        return(
            <tr><td>{user.user.firstName}</td><td>{user.user.lastName}</td><td>{user.user.email}</td></tr>
        );
    }

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(actions.fetchUsers());
    },[dispatch]);

   let  { users } = useSelector(
        (state) => {
            return { users: state.users?.users}
        }
    )

    if ( ! users ){
        users=[];
    }


    return (
        <table >
            {users.map((user,index)=>{
                return <UserRow user={user}/>
                //return <tr><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.email}</td></tr>
            })}
        </table>
    );
}
export default Test;