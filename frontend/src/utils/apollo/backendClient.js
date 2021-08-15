import ApolloClient from 'apollo-boost';

const backendClient = new ApolloClient({uri: process.env.REACT_APP_BACKEND_URL})

export const getBackendClient = ()=>{
    return backendClient;
}