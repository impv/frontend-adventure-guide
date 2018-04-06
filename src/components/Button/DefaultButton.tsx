import * as React from 'react'

import styled from 'styled-components'
import { darken } from 'polished'

import ButtonBase from './ButtonBase'

const baseColor = '#F8BA69'
const primaryColor = '#03D1AB'
const secondaryColor = '#4E1C81'

const DefaultButton = ButtonBase.extend`
  // appearance
  background-color: #fff;
  color: ${primaryColor};

  // pseudo
  &:hover {
    background-color: ${darken(0.03, '#fff')};
  }

  &:active {
    background-color: ${darken(0.07, '#fff')};
  }
`

export default DefaultButton
