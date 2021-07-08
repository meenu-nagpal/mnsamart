// import {loading} from './loadingReducer';
// import {todo} from './todoReducer';
// import {ctr} from './ctrReducer';

import {combineReducers} from 'redux'

import { shopingtocart } from './shopingcart';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
}

const rootReducer = combineReducers({cart:shopingtocart});


export default persistReducer(persistConfig,rootReducer)