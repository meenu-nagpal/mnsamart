import {loading} from './loadingReducer';
import {todo} from './todoReducer';
import {ctr} from './ctrReducer';
import { createnewuser } from './UserReducer';
import {combineReducers} from 'redux'

var rootReducer = combineReducers({todo,loading,ctr,createnewuser});


