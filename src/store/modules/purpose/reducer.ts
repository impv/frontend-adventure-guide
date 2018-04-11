import { Action, handleActions } from 'redux-actions'

import { SetPurposes, ToggleSelect } from './actions'
import { defaultState, State } from './state'

import Skill from '~/types/Skill'

type Payload = SetPurposes | ToggleSelect

const reducer = handleActions<State, Payload>(
  {
    [SetPurposes]: (state, { payload }: Action<SetPurposes>) => ({
      ...state,
      purposes: payload.purposes.map(purpose => ({
        ...purpose,
        selected: false
      }))
    }),

    [ToggleSelect]: (state, { payload: description }: Action<ToggleSelect>) => {
      const updatedPurpose = state.purposes.map(
        purpose =>
          purpose.description === description
            ? { ...purpose, selected: !purpose.selected }
            : purpose
      )

      return {
        ...state,
        purposes: updatedPurpose,
        // 更新されたやりたいことリストのスキル要求値でスキル別要求値を更新する
        requirements: updatedPurpose.filter(p => p.selected).reduce<Skill[]>(
          (requirements, purpose) =>
            requirements.map(requirement => {
              const found = purpose.requirements.find(
                skill => skill.skill === requirement.skill
              )

              // やりたいことの要求値がすでにあるものより低ければ更新しない
              if (!found || found.level <= requirement.level) {
                return requirement
              }

              return found
            }),
          // レベル0のものも表示するためデフォルト(全てのスキルが0)から生成する
          defaultState.requirements
        )
      }
    }
  },
  defaultState
)

export default reducer
