import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

type Props = Themed

const Wrapper = styled.label`
  // layout
  display: block;
  vertical-align: middle;

  // appearance
  color: #fff;
  font-size: ${({ theme }: Props) => theme.fontSize}px;

  // misc
  cursor: pointer;
`

export default Wrapper
