import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import iterationChangeReducer from '../reducers/iteration-change-reducer';

const rootReducer = combineReducers({
  iterationChange: iterationChangeReducer
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
