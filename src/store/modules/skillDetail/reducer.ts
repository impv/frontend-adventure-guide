import { Action, handleActions } from 'redux-actions'

import { SetSkillDetails } from './actions'
import { defaultState, State } from './state'

type Payload = SetSkillDetails

const reducer = handleActions<State, Payload>(
  {
    [SetSkillDetails]: (
      state,
      { payload: { details } }: Action<SetSkillDetails>
    ) => ({
      ...state,
      details
    })
  },
  defaultState
)

export default reducer
