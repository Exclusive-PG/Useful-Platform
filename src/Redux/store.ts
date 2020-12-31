import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducerDashBoard from './reducerMD';
import reducerGoogleLogin from './reducerGoogleLogin';
import {createLogger} from 'redux-logger';
import reducerToDO from './reducerToDoList';

const logger  = createLogger();


export const RootReducer  = combineReducers({reducerDashBoard , reducerGoogleLogin,reducerToDO})

export type AppState = ReturnType<typeof RootReducer>; 

 const store = createStore(RootReducer,applyMiddleware(logger));

export default store;