import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import propertyReducer from '../reducers/propertyReducer'

const configureStore=()=>{
    const store= createStore(combineReducers({
        property: propertyReducer

    }),applyMiddleware(thunk))
    return store

}

export default configureStore