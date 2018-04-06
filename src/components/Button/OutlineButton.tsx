import * as React from 'react'

import { darken } from 'polished'
import styled from 'styled-components'

import ButtonBase from './ButtonBase'

const baseColor = '#F8BA69'
const primaryColor = '#03D1AB'
const secondaryColor = '#4E1C81'

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
    color: ${primaryColor};
    border-color: ${primaryColor};
  }

  &:active {
    color: ${darken(0.05, primaryColor)};
    border-color: ${darken(0.1, primaryColor)};
  }
`

export default OutlineButton
