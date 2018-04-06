import * as React from 'react'

import { darken } from 'polished'
import styled from 'styled-components'

import { Themed } from '~/styles/theme'

import ButtonBase from './ButtonBase'

type Props = Themed

const OutlineButton = ButtonBase.extend`
  // appearance
  background-color: transparent;
  color: #fff;
  border-color: #fff;

  // animation
  transition: color 0.2s ease 0s;
  transition: border-color 0.2s ease 0s;

  // pseudo
  &:hover {
    color: ${({ theme }: Props) => theme.primaryColor};
    border-color: ${({ theme }: Props) => theme.primaryColor};
  }

  &:active {
    color: ${({ theme }: Props) => darken(0.05, theme.primaryColor)};
    border-color: ${({ theme }: Props) => darken(0.1, theme.primaryColor)};
  }
`

export default OutlineButton
