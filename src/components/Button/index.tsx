import * as React from 'react'

import styled from 'styled-components'

const baseColor = '#F8BA69'
const primaryColor = '#03D1AB'
const secondaryColor = '#4E1C81'

type ButtonType = 'primary' | 'outline' | 'default'

interface Props {
  type?: ButtonType
  block?: boolean
}

const ButtonBase = styled.button`
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
`

const PrimaryButton = ButtonBase.extend`
  background-color: ${primaryColor};
  color: #fff;
`

const OutlineButton = ButtonBase.extend`
  background-color: transparent;
  color: #fff;
  border-color: #fff;
`

const DefaultButton = ButtonBase.extend`
  background-color: #fff;
  color: ${primaryColor};
`

const Button: React.StatelessComponent<Props> = ({
  block = false,
  type = 'default',
  children
}) => {
  const Btn = (() => {
    switch (type) {
      case 'primary':
        return PrimaryButton
      case 'outline':
        return OutlineButton
      default:
        return DefaultButton
    }
  })()

  return <Btn block={block}>{children}</Btn>
}

export default Button
