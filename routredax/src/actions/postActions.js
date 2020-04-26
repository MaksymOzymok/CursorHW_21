import axios from "axios"

export const SET_LIKE = 'SET_LIKE';
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const POST_POST_REQUEST = 'POST_POST_REQUEST';
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';


export function setLike(id) {
    return {
        type: SET_LIKE,
        payload: id
    };
}

export function getPosts() {
    return dispatch => {
        dispatch(getPostsRequest());
        axios({
            method: 'get',
            url: 'https://77.120.108.119:9999/tweets/'
        }).then(res => dispatch(getPostsSuccess(res.data.data)))
    }
}
export const postPost=({userId,content,image})=>{
    return dispatch =>{
       dispatch(postPostRequest());
      axios({
          method : 'post',
          url: 'https://77.120.108.119:9999/tweets/',
          data:{
              userId: parseInt(userId),
              content:content,
              image : image
          }
      }).then(dispatch(postPostSuccess()));
    }
};

const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
};

const getPostsSuccess = (data) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload : data
    }
};
const postPostRequest = ()=>{
    return{
        type: POST_POST_REQUEST
    }
};
const postPostSuccess = (obj)=>{
    return{
        type: POST_POST_SUCCESS,
        payload: obj
    }
};
