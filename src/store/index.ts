import { applyMiddleware, combineReducers, createStore } from 'redux'

import { routerMiddleware, routerReducer } from 'react-router-redux'

import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import purpose, { State as Purpose } from './modules/purpose'
import skillDetail, { State as SkillDetail } from './modules/skillDetail'

import { history } from '~/router/history'

const middleware = routerMiddleware(history as any)

const persistConfig: PersistConfig = {
  storage,
  key: 'root',
  blacklist: ['router']
}

export interface RootState {
  purpose: Purpose
  skillDetail: SkillDetail
}

const store = createStore<RootState>(
  // Workaround for type error caused by Incorrect type definitions for redux-persist
  // TODO: Remove as any when merged https://github.com/rt2zz/redux-persist/pull/778
  persistReducer(
    persistConfig,
    combineReducers({ purpose, skillDetail, router: routerReducer })
  ) as any,
  applyMiddleware(middleware)
)

export default store

export const persistor = persistStore(store)
