import * as React from 'react'

import styled from 'styled-components'

import Checkbox from './Checkbox'
import Input from './Input'
import Wrapper from './Wrapper'

interface Props {
  /**
   * チェックされているかどうか
   */
  checked: boolean
}

export const CheckItem: React.SFC<Props> = ({ checked, children }) => (
  <Wrapper>
    <Input type="checkbox" checked={checked} />
    <Checkbox checked={checked} />
    {children}
  </Wrapper>
)

export default CheckItem
