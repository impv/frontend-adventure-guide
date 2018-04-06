import * as React from 'react'

import { darken, lighten } from 'polished'
import styled from 'styled-components'

import { Themed } from '~/styles/theme'

import ButtonBase from './ButtonBase'

type Props = Themed

const PrimaryButton = ButtonBase.extend`
  // appearance
  background-color: ${({ theme }: Props) => theme.primaryColor};
  color: #fff;

  // pseudo
  &:hover {
    background-color: ${({ theme }: Props) =>
      lighten(0.03, theme.primaryColor)};
  }

  &:active {
    background-color: ${({ theme }: Props) => darken(0.02, theme.primaryColor)};
  }
`

export default PrimaryButton
