import * as React from 'react'

import styled from 'styled-components'

interface ButtonBaseProps {
  block: boolean
}

const ButtonBase = styled.button`
  display: ${(p: ButtonBaseProps) => (p.block ? 'block' : 'inline-block')};
  padding: 1em 0;
  width: ${(p: ButtonBaseProps) => (p.block ? '100%' : '20em')};

  border: 1px solid transparent;
  border-radius: 5px;

  outline: none;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: none;
  }
`

export default ButtonBase
