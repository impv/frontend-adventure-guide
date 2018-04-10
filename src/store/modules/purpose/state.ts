import { SelectablePurpose } from '~/types/Purpose'

export interface State {
  purposes: SelectablePurpose[]
}

export const defaultState: State = {
  purposes: []
}
