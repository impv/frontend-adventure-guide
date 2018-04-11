import * as React from 'react'

import styled from 'styled-components'

import LinkButton from '~/components/LinkButton'
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
      <LinkButton to="/" type="primary">
        さいしょにもどる
      </LinkButton>
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
