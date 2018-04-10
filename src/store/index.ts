import { combineReducers, createStore } from 'redux'

import purpose, { State as Purpose } from './modules/purpose'

export interface RootState {
  purpose: Purpose
}

const store = createStore<RootState>(combineReducers({ purpose }))

export default store
