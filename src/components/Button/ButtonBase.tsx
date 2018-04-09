import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

interface ButtonBaseProps extends Themed {
  block: boolean
}

const ButtonBase = styled.button`
  // layout
  display: ${(p: ButtonBaseProps) => (p.block ? 'block' : 'inline-block')};
  padding: 0.8em 0;
  width: ${(p: ButtonBaseProps) => (p.block ? '100%' : '20em')};
  font-size: ${({ theme }: ButtonBaseProps) => theme.fontSize}px;

  // appearance
  border: 1px solid transparent;
  border-radius: 5px;

  // animation
  transition: background-color 0.2s ease 0s;

  // misc
  outline: none;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
  }

  // pseudo
  &:focus {
    outline: none;
  }
`

export default ButtonBase
