import * as React from 'react'

import styled from 'styled-components'

import Button from '~/components/Button'
import LinkButton from '~/components/LinkButton'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

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
    <PageHeader iconText="...">先端技術力を高める</PageHeader>
    <Buttons>
      <Button type="outline" block>
        HTML/CSS/JSでできること、やるべきことを理解する
      </Button>
      <Button type="outline" block>
        Canvas
      </Button>
      <Button type="outline" block>
        LocalStorage/IndexedDB/SessionStorage
      </Button>
    </Buttons>
    <PageFooter>
      <LinkButton to="/todo" type="primary">
        もどる
      </LinkButton>
    </PageFooter>
  </Page>
)

export default ToDo
