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


import {persistStore} from 'redux-persist'



var rootReducer = combineReducers({todos,loading,ctr,postapi,selectedproduct,shopingtocart,loggedInUser,LoginVisibility});




 export var store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

export const persistor=persistStore(store);


export default {store,persistor};
