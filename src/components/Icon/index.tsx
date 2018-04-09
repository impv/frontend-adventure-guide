import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

const size = 28

type Props = Themed

const Container = styled.span`
  // layout
  position: relative;
  display: block;
  width: ${size}px;
  height: ${size}px;
  padding: ${size}px;
  box-sizing: border-box;

  // appearance
  color: #fff;
  background-color: ${({ theme }: Props) => theme.primaryColor};
  border-radius: 50%;
`

const InnerItem = styled.span`
  // layout
  position: absolute;
  display: inline;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // misc
  font-size: ${({ theme }: Props) => theme.fontSize * 1.4}px;
`

export const Icon: React.SFC = ({ children }) => (
  <Container>
    <InnerItem>{children}</InnerItem>
  </Container>
)

export default Icon
