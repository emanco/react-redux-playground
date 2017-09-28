const userIdle = () => {
    return {
        type: 'USER_IDLE',
        payload: 0
    };
};

const userClick = () => {
    return {
        type: 'USER_CLICK',
        payload: 1
    };
};

export default userIdle;
export { userIdle, userClick };