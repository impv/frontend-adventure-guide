import * as React from 'react'

import styled from 'styled-components'

import BackButton from '~/components/BackButton'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import ToDoSkillList from '~/containers/ToDoSkillList'

const ToDo: React.StatelessComponent = () => (
  <Page>
    <PageHeader iconText="...">やるべきこと</PageHeader>
    <SkillListContainer>
      <ToDoSkillList />
    </SkillListContainer>
    <PageFooter>
      <BackButton type="primary">もどる</BackButton>
    </PageFooter>
  </Page>
)

export default ToDo

const SkillListContainer = styled.div`
  // layout
  display: flex;
  justify-content: space-around;

  > * {
    flex-grow: 1;
  }
`
