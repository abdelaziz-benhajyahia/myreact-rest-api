// IMPORT createStore
import {compose, createStore, applyMiddleware} from 'redux'

// IMPORT rootReducers
import rootReducer from '../Reducers'
import thunk from 'redux-thunk'
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create Store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store