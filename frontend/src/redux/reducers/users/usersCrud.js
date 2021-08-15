import {getBackendClient} from "../../../utils/apollo/backendClient";
import gql from 'graphql-tag';

const backendClient=getBackendClient();

export const fetchUsers = async () => {
    const usersQuery=gql`
    query getUsers(){
      getUsers(){
      user{
      firstName
      lastName
      email
      }
      }
    }
    `
    return backendClient.query({
        query: usersQuery
    })
}

export const addUser = async(user)=>{
    const addUserMutation= gql `
    mutation addUser($user: UserInput){
    addUser(input: $user){
        firstName
        lastName
        email
    }
    }
    `
    backendClient.mutate({
        mutation: addUserMutation,
        variables:{
            user:user
        }
    })
}