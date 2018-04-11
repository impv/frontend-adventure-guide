import * as React from 'react'

import styled from 'styled-components'

import Button from '~/components/Button'
import LinkButton from '~/components/LinkButton'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

import { todos } from '~/config/todo.yml'

const Buttons = styled.div`
  // layout
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 1em;
  }
`

interface ToDoListProps {
  ability: string
}

const ToDoList: React.SFC<ToDoListProps> = props => (
  <Buttons>
    {todos.filter(todo => todo.skill === props.ability).map(({ summary }) => (
      <Button key={summary} type="outline" block>
        {summary}
      </Button>
    ))}
  </Buttons>
)

interface Props {
  params: { [key: string]: string }
}

const ToDo: React.SFC<Props> = ({ params }) => (
  <Page>
    <PageHeader iconText="...">先端技術力を高める</PageHeader>
    <Buttons>
      <ToDoList ability={params.ability} />
    </Buttons>
    <PageFooter>
      <LinkButton to="/todo" type="primary">
        もどる
      </LinkButton>
    </PageFooter>
  </Page>
)

export default ToDo
