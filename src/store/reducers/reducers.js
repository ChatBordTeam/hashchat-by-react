import { combineReducers } from 'redux';
import settingsReducer from './settings.reducer.js';


export default combineReducers({
    settings: settingsReducer
});
