import { combineReducers, createStore } from 'redux'

import purpose, { State as Purpose } from './modules/purpose'
import skillDetail, { State as SkillDetail } from './modules/skillDetail'

export interface RootState {
  purpose: Purpose
  skillDetail: SkillDetail
}

const store = createStore<RootState>(combineReducers({ purpose, skillDetail }))

export default store
