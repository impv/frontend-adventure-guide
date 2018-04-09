import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

type H1Props = Themed

const H1 = styled.h1`
  // layout
  font-size: ${({ theme }: H1Props) => theme.fontSize * 1.3}px;
  margin: 0;

  // appearance
  color: #fff;
  font-weight: 400;
`

export const Title: React.SFC = ({ children }) => <H1>{children}</H1>

export default Title
