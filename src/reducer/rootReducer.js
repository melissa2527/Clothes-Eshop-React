import {combineReducers} from 'redux';

import userReducer from './userReducer';

export default combineReducers({
    user: userReducer
});

// bring user reducer into the root reducer