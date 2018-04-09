import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

import Check from './Check'

interface Props extends Themed {
  checked: boolean
}

const Container = styled.span`
  // layout
  position: relative;
  display: inline-block;
  width: ${({ theme }: Props) => theme.fontSize + 1}px;
  height: ${({ theme }: Props) => theme.fontSize + 1}px;
  box-sizing: border-box;
  vertical-align: middle;

  // appearance
  border: 1px solid #fff;
  border-radius: 3px;
`

const Checkbox: React.SFC<Props> = ({ checked }) => (
  <Container checked={checked}>
    <Check checked={checked} />
  </Container>
)

export default Checkbox
