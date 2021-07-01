import { createStore, applyMiddleware,combineReducers } from 'redux';
import {todos} from '../Reducer/TodoReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {loading} from '../Reducer/loadingreducer';

import {ctr} from '../Reducer/ctrreducer';
import {postapi} from '../Reducer/postapi';
import {selectedproduct} from '../Reducer/selectedproduct';
import {shopingtocart} from '../Reducer/shopingcart';




var rootReducer = combineReducers({todos,loading,ctr,postapi,selectedproduct,shopingtocart});




var store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );



export default store;
