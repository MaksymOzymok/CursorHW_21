import {GET_USERS_REQUEST,GET_USERS_SUCCESS,POST_USER_SUCCESS,POST_USER_REQUEST} from "../actions/userActions";

const initialState = {
    data : []
};

const userReducer  = (state = initialState,action)=>{
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {...state,isFetching: true};
        case GET_USERS_SUCCESS:
            return {...state,data: action.payload.data, isFetching: false};
        case POST_USER_REQUEST:
            return {...state};
        case POST_USER_SUCCESS:
            console.log('posted user');
            return {...state};
        default:
            return state;
    }
};
export default userReducer;