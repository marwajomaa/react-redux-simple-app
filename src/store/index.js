// redux have only one store then there' no need for dispacher, the store will dispacch the actions directly
// having one store means that all state will be located in one place means all data can be store in single object

import { createStore } from 'redux'
import {rootReducers} from '../reducers'

export const store = createStore(rootReducers)
