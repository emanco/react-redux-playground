const initialised = () => {
    return {
        type: 'INITIALISED',
        payload: 0
    };
};

const ready = () => {
    return {
        type: 'READY',
        payload: 1
    };
};

export default initialised();
export { initialised, ready};