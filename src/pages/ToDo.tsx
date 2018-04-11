import * as React from 'react'

import styled from 'styled-components'

import LinkButton from '~/components/LinkButton'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

import { skills } from '~/config/skills.yml'

const Buttons = styled.div`
  // layout
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 1em;
  }
`

const ToDo: React.StatelessComponent = () => (
  <Page>
    <PageHeader iconText="...">やるべきこと</PageHeader>
    <Buttons>
      {skills.map(ability => (
        <LinkButton
          key={ability.name}
          to={`/todo/${ability.name}`}
          type="outline"
          block
        >
          {ability.label}
        </LinkButton>
      ))}
    </Buttons>
    <PageFooter>
      <LinkButton to="/" type="primary">
        さいしょにもどる
      </LinkButton>
    </PageFooter>
  </Page>
)

export default ToDo
