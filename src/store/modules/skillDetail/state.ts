import SkillDetail from '~/types/SkillDetail'

export interface State {
  details: SkillDetail[]
}

export const defaultState: State = {
  details: []
}
