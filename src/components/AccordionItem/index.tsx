import * as React from 'react'

import styled from 'styled-components'

import Button from '~/components/Button'

import { Themed } from '~/styles/theme'

export interface Props {
  /** 見出し */
  title: string
  /**
   * 閉じられているかどうか
   *
   * `<AccordionList>`によって指定されるため、直接渡す必要はない
   */
  collapse?: boolean
  /**
   * 開かれた際のハンドラ
   *
   * `<AccordionList>`によって指定されるため、直接渡す必要はない
   */
  onExpand?: (title: string) => any
}

/**
 * アコーディオンの子要素
 *
 * 使い方は`<AccordionList>`を参照
 */
export const AccordionItem: React.SFC<Props> = ({
  title,
  collapse,
  onExpand = () => null,
  children
}) => (
  <div>
    <Button
      type="outline"
      onClick={() => (collapse ? onExpand(title) : null)}
      block
    >
      {title}
    </Button>
    <Content collapse={collapse}>{children}</Content>
  </div>
)

export default AccordionItem

interface ContentProps extends Themed {
  collapse: boolean
}
const Content = styled.div`
  // layout
  padding: ${(p: ContentProps) => (p.collapse ? '0' : '1em')} 1em;
  line-height: ${(p: ContentProps) => (p.collapse ? 0 : 1.5)};
  opacity: ${(p: ContentProps) => (p.collapse ? 0 : 1)}

  // appearance
  color: #fff;

  // misc
  transition: padding-top 0.2s ease,
    padding-bottom 0.2s ease,
    line-height 0.2s ease,
    opacity 0.1s linear ${(p: ContentProps) => (p.collapse ? 0 : 0.1)}s;
  font-size: ${(p: ContentProps) => p.theme.fontSize * 0.8}px;
`
