import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers/root-reducer';
import thunk from 'redux-thunk';
// Logger with default options
import logger from 'redux-logger';
const middleWare = [logger, thunk]

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleWare))
)

export default store;