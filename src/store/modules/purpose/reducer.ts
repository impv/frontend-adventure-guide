import { handleActions, Action } from 'redux-actions'

import { SetPurposes, ToggleSelect } from './actions'
import { defaultState, State } from './state'

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
    [ToggleSelect]: (
      state,
      { payload: description }: Action<ToggleSelect>
    ) => ({
      ...state,
      purposes: state.purposes.map(
        purpose =>
          purpose.description === description
            ? { ...purpose, selected: !purpose.selected }
            : purpose
      )
    })
  },
  defaultState
)

export default reducer
