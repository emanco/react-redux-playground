export default function navigationReducer(state = {}, action = '') {
    switch (action.type)
    {
        case 'INITIALISED' :
            state = {
                ready: false,
                payload: {
                    data: action.payload
                }
            };
            break;
        case 'READY' :
            state = {
                ready: true,
                payload: {
                    data: action.payload
                }
            };
            break;
        default:
            state = {};
            break;
    }

    return state;
}