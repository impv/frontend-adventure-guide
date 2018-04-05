import * as React from 'react'

import styled from 'styled-components'

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
}

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

/**
 * 基本的なボタン
 */
export const Button: React.SFC<Props> = ({
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
