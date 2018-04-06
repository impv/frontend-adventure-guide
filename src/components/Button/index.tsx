import * as React from 'react'

import styled from 'styled-components'
import { lighten, darken } from 'polished'

import ButtonBase from './ButtonBase'
import PrimaryButton from './PrimaryButton'
import OutlineButton from './OutlineButton'
import DefaultButton from './DefaultButton'
import DisabledButton from './DisabledButton'

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
   * ボタンが有効かどうか
   * @default false
   */
  disabled?: boolean
  /**
   * クリックハンドラ
   */
  onClick?: () => any
}

/**
 * 基本的なボタン
 */
export const Button: React.SFC<Props> = ({
  block = false,
  disabled = false,
  type = 'default',
  onClick,
  children
}) => {
  const Btn = (() => {
    if (disabled) {
      return DisabledButton
    }

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
    <Btn onClick={onClick} block={block} disabled={disabled}>
      {children}
    </Btn>
  )
}

export default Button
