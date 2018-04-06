import * as React from 'react'

import styled from 'styled-components'
import { lighten, darken } from 'polished'

import ButtonBase from './ButtonBase'

const baseColor = '#F8BA69'
const primaryColor = '#03D1AB'
const secondaryColor = '#4E1C81'

interface Props {
  /**
   * ボタンの種類
   * @default default
   */
  type?: 'primary' | 'outline' | 'default'
  /**
   * ブロックレベルで表示するかどうか
   * @default false
   */
  block?: boolean
  /**
   * クリックハンドラ
   */
  onClick?: () => any
}

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

/**
 * 基本的なボタン
 */
export const Button: React.SFC<Props> = ({
  block = false,
  type = 'default',
  onClick,
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

  return (
    <Btn onClick={onClick} block={block}>
      {children}
    </Btn>
  )
}

export default Button
