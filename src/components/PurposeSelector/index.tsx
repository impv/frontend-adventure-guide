import * as React from 'react'

import styled from 'styled-components'

import { SelectablePurpose } from '~/types/Purpose'

import CheckItem from '~/components/CheckItem'

export interface Props {
  /** やりたいことの一覧 */
  purposes: SelectablePurpose[]
  /** 選択状態が変化した場合のハンドラ */
  onSelect: (description: string) => any
}

/** やりたいことリスト */
export const PurposeSelector: React.SFC<Props> = ({ purposes, onSelect }) => (
  <Container>
    {purposes.map(({ description, selected }) => (
      <CheckItem
        key={description}
        checked={selected}
        onChange={checked => onSelect(description)}
      >
        {description}
      </CheckItem>
    ))}
  </Container>
)

export default PurposeSelector

const Container = styled.div`
  > *:not(:first-child) {
    margin-top: 1em;
  }
`
