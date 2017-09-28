export default function testReducer(state = {}, action = '') {
    switch (action.type)
    {
        case 'USER_IDLE' :
            state = {
                clicked: false,
                number: 0,
                payload: {
                    data: action.payload
                }
            };
            break;
        case 'USER_CLICK' :
            state = {
                clicked: true,
                number: state.number+1,
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