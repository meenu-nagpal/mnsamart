import {loading} from './loadingReducer';
import {todo} from './todoReducer';
import {ctr} from './ctrReducer';

import {combineReducers} from 'redux'

var rootReducer = combineReducers({todo,loading,ctr});

