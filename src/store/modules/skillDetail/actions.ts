import { createAction } from 'redux-actions'

import SkillDetail from '~/types/SkillDetail'

export interface SetSkillDetails {
  details: SkillDetail[]
}
export const SetSkillDetails = 'skillDetail/SET_SKILL_DETAILS'

/** スキル詳細を更新する */
export const setSkillDetails = createAction<SetSkillDetails>(SetSkillDetails)
