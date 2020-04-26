import {SET_LIKE,GET_POSTS_SUCCESS,GET_POSTS_REQUEST,POST_POST_SUCCESS,POST_POST_REQUEST} from "../actions/postActions";

const initialState = {
    isFetching : false,
    data: [

    ]
};

const postReducer = (state = initialState,action)=>{
    switch (action.type) {
        case SET_LIKE:
            console.log("you liked" + action.payload);
            return state;
        case GET_POSTS_REQUEST:
            return state;
        case GET_POSTS_SUCCESS:
            return {...state,data:action.payload};
        case POST_POST_REQUEST:
            return state;
        case POST_POST_SUCCESS:
            return state;
        default:
            return state
    }


};
export default postReducer;