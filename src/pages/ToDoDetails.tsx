import * as React from 'react'

import styled from 'styled-components'

import BackButton from '~/components/BackButton'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import SkillLabel from '~/containers/SkillLabel'
import ToDoList from '~/containers/ToDoList'

import { todos } from '~/config/todo.yml'

interface Props {
  params: { [key: string]: string }
}

const ToDo: React.SFC<Props> = ({ params }) => (
  <Page>
    <PageHeader iconText="...">
      <SkillLabel skill={params.ability} />
    </PageHeader>
    <ToDoList skill={params.ability} />
    <PageFooter>
      <BackButton type="primary">もどる</BackButton>
    </PageFooter>
  </Page>
)

export default ToDo
