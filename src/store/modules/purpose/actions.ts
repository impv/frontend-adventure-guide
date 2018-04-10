import { createAction } from 'redux-actions'

import Purpose from '~/types/Purpose'

export interface SetPurposes {
  purposes: Purpose[]
}
export const SetPurposes = 'purpose/SET_PURPOSES'

/** やりたいことリストを設定する */
export const setPurposes = createAction<SetPurposes>(SetPurposes)

// ---

/** 切り替える対象の内容 */
export type ToggleSelect = string
export const ToggleSelect = 'purpose/TOGGLE_SELECT'

/** やりたいことの選択状態を切り替える */
export const toggleSelect = createAction<ToggleSelect>(ToggleSelect)
