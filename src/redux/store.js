
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import productsDucks from './productsDucks';

const rootReducer = combineReducers({
  products: productsDucks
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
    rootReducer,    
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store