import * as React from 'react'

import { darken } from 'polished'
import styled from 'styled-components'

import { Themed } from '~/styles/theme'

import ButtonBase from './ButtonBase'

type Props = Themed

const DefaultButton = ButtonBase.extend`
  // appearance
  background-color: #fff;
  color: ${({ theme }: Props) => theme.primaryColor};

  // pseudo
  &:hover {
    background-color: ${darken(0.03, '#fff')};
  }

  &:active {
    background-color: ${darken(0.07, '#fff')};
  }
`

export default DefaultButton
