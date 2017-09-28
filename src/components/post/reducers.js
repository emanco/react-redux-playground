export default function postReducer(state = {}, action = '') {
    switch (action.type)
    {
        case 'FETCH_POSTS_PENDING' :
            state = {
                loading: true,
                success: false,
                payload: {}
            };
        break;
        case 'FETCH_POSTS_FULFILLED' :
            state = {
                loading: false,
                success: true,
                payload: action.payload.data.data.children
            };
        break;
        case 'FETCH_POSTS_REJECTED' :
            state = {
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
        break;
        case 'FETCH_SINGLE_POST_PENDING' :
            state = {
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'FETCH_SINGLE_POST_FULFILLED' :
            state = {
                loading: false,
                success: true,
                payload: action.payload.data//.data.children
            };
            break;
        case 'FETCH_SINGLE_POST_REJECTED' :
            state = {
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
            break;
        default:
            state = {};
        break;
    }

    return state;
}