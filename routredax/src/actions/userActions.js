import axios from "axios"

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_ERROR = 'POST_USER_ERROR';


export function getUsers() {
    return dispatch => {
        dispatch(getUsersRequest());
        axios({
            method: 'get',
            url: 'http://77.120.108.119:9999/users/'
        })
            .then(res => {
                    dispatch(getUserSuccess(res.data))
                }
            )
    }
}

export const addUser = ({name, username, avatar}) => {
    return dispatch => {
        dispatch(postUserRequest());

        axios({ method:'post',
            url:'http://77.120.108.119:9999/users/',
            data: {
                name,
                username,
                avatar
            }})
            .then(res => postUserSuccess(res.data))
    }
};
const getUsersRequest = ()=> {
    return{
        type: GET_USERS_REQUEST,
    }
};
const getUserSuccess = (data)=>{
    return{
        type: GET_USERS_SUCCESS,
        payload: data
    }
};
const postUserRequest = () => {
    return {
        type: POST_USER_REQUEST
    }
};
const postUserSuccess = (data) => {
    return {
        type: POST_USER_SUCCESS,
        payload : {...data}
    }
};