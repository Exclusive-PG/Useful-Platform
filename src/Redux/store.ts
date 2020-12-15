import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducerDashBoard from './reducerMD';
import reducerGoogleLogin from './reducerGoogleLogin';
import {createLogger} from 'redux-logger';

const logger  = createLogger();


export const RootReducer  = combineReducers({reducerDashBoard , reducerGoogleLogin})

export type AppState = ReturnType<typeof RootReducer>; 

 const store = createStore(RootReducer,applyMiddleware(logger));

export default store;