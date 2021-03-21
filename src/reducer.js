import {combineReducers} from 'redux';
import tasksReducer from './tasks/tasksReducer';

const createRootReducer = () => {
    return combineReducers({
        tasks: tasksReducer,
    });
};

export default createRootReducer;