import * as React from 'react'

import { darken } from 'polished'
import styled from 'styled-components'

import ButtonBase from './ButtonBase'

const DisabledButton = ButtonBase.extend`
  // appearance
  background-color: ${darken(0.15, '#fff')};
  color: ${darken(0.3, '#fff')};
  cursor: not-allowed;
`

export default DisabledButton
