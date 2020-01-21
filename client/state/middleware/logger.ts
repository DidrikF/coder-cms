// this is executed before the action is given to the reducer.
const logger = ({ getState }) => {
    return next => action => {
        console.log('MIDDLEWARE', getState(), action);
        const value = next(action);
    }
};