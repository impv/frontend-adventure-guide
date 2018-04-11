import { SelectablePurpose } from '~/types/Purpose'
import Skill from '~/types/Skill'

import SkillType from '~/enums/SkillType'

export interface State {
  purposes: SelectablePurpose[]
  requirements: Skill[]
}

export const defaultState: State = {
  purposes: [],
  requirements: Object.keys(SkillType).map(key => ({
    level: 0,
    skill: SkillType[key]
  }))
}
