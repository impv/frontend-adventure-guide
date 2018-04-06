import * as React from 'react'

import styled from 'styled-components'
import { lighten, darken } from 'polished'

import ButtonBase from './ButtonBase'

const baseColor = '#F8BA69'
const primaryColor = '#03D1AB'
const secondaryColor = '#4E1C81'

const PrimaryButton = ButtonBase.extend`
  // appearance
  background-color: ${primaryColor};
  color: #fff;

  // pseudo
  &:hover {
    background-color: ${lighten(0.03, primaryColor)};
  }

  &:active {
    background-color: ${darken(0.02, primaryColor)};
  }
`

export default PrimaryButton
