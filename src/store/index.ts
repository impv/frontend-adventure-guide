import { applyMiddleware, combineReducers, createStore } from 'redux'

import { routerReducer, routerMiddleware } from 'react-router-redux'

import purpose, { State as Purpose } from './modules/purpose'
import skillDetail, { State as SkillDetail } from './modules/skillDetail'

import { history } from '~/router/history'

const middleware = routerMiddleware(history as any)

export interface RootState {
  purpose: Purpose
  skillDetail: SkillDetail
}

const store = createStore<RootState>(
  combineReducers({ purpose, skillDetail, router: routerReducer }),
  applyMiddleware(middleware)
)

export default store
