export default function userReducer(state = {}, action = '') {
    switch (action.type)
    {
        // All users
        case 'FETCH_USERS_PENDING' :
            state = {
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'FETCH_USERS_FULFILLED' :
            state = {
                loading: false,
                success: true,
                payload: action.payload.data
            };
            break;
        case 'FETCH_USERS_REJECTED' :
            state = {
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
            break;

        // Single user
        case 'FETCH_USER_PENDING' :
            state = {
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'FETCH_USER_FULFILLED' :
            state = {
                loading: false,
                success: true,
                payload: action.payload.data
            };
            break;
        case 'FETCH_USER_REJECTED' :
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