import * as React from 'react'

import styled from 'styled-components'

import Button from '~/components/Button'

import SkillDetail from '~/types/SkillDetail'

export interface Props {
  /** 習得すべきスキルの一覧 */
  skills: SkillDetail[]
  /** スキルが選択された場合のハンドラ */
  onSelect: (skill: SkillDetail) => any
}

/** 習得すべきスキルリスト */
export const ToDoSkillList: React.SFC<Props> = ({ skills, onSelect }) => (
  <Container>
    {skills.map(skill => (
      <Button type="outline" onClick={() => onSelect(skill)}>
        {skill.label}
      </Button>
    ))}
  </Container>
)

export default ToDoSkillList

const Container = styled.div`
  // layout
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 1em;
  }
`
