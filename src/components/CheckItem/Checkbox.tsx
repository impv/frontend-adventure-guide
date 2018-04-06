import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

interface Props extends Themed {
  checked: boolean
}

const size = 13

const Checkbox = styled.span`
  // layout
  position: relative;
  display: inline-block;
  width: ${size}px;
  height: ${size}px;
  box-sizing: content-box;

  // appearance
  border: 1px solid #fff;
  border-radius: 3px;

  ${({ checked, theme }: Props) =>
    checked
      ? `
        &:after {
          content: '✓';
          position: absolute;
          left: 0;

          color: ${theme.primaryColor};
        }
      `
      : ''};
`

export default Checkbox
