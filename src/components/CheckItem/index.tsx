import * as React from 'react'

import styled from 'styled-components'

import Checkbox from './Checkbox'
import Input from './Input'
import Label from './Label'
import Wrapper from './Wrapper'

export interface Props {
  /**
   * チェックされているかどうか
   */
  checked: boolean
  /**
   * チェック状態が変化した場合のハンドラ
   */
  onChange?: (checked: boolean) => any
}

/**
 * ラベル付きチェック項目
 */
export const CheckItem: React.SFC<Props> = ({
  checked,
  children,
  onChange
}) => (
  <Wrapper>
    <Input
      type="checkbox"
      checked={checked}
      onChange={ev => (onChange ? onChange(ev.target.checked) : 0)}
    />
    <Checkbox checked={checked} />
    <Label>{children}</Label>
  </Wrapper>
)

export default CheckItem
