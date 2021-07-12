import { createStore, applyMiddleware,combineReducers } from 'redux';
import {todos} from '../Reducer/TodoReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {loading} from '../Reducer/loadingreducer';

import {ctr} from '../Reducer/ctrreducer';
import {postapi} from '../Reducer/postapi';
import {selectedproduct} from '../Reducer/selectedproduct';
import {shopingtocart} from '../Reducer/shopingcart';
import {loggedInUser} from '../Reducer/LoggedInUser';
import {LoginVisibility} from '../Reducer/LoginVisibility';



import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' 

var rootReducer = combineReducers({todos,loading,ctr,postapi,selectedproduct,shopingtocart,loggedInUser,LoginVisibility});



// const persistConfig = { // configuration object for redux-persist
//     key: 'root',
//     storage, // define which storage to use
// }


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['shopingtocart'] // only navigation will be persisted
  };





const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    composeWithDevTools(applyMiddleware(thunk))// add any middlewares here
)

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export {store, persistor}






