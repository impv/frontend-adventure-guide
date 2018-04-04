import * as React from 'react'

import styled from 'styled-components'

const baseColor = '#F8BA69'
const primaryColor = '#03D1AB'
const secondaryColor = '#4E1C81'

type Type = 'primary' | 'outline' | 'normal'

interface Props {
  type?: Type
  block?: boolean
}

const ButtonTypes = (p: Props) =>
  p.type === 'primary'
    ? `
  background-color: ${primaryColor};
  color: #fff;
`
    : p.type === 'outline'
      ? `
  background-color: transparent;
  color: #fff;
  border-color: #fff;
`
      : `
  background-color: #fff;
  color: ${primaryColor}
`

const Button = styled.button`
  display: ${(p: Props) => (p.block ? 'block' : 'inline-block')};
  padding: 1em 0;
  width: ${(p: Props) => (p.block ? '100%' : '20em')};

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

  ${ButtonTypes};
`

export default Button
