import * as React from 'react'

import styled from 'styled-components'

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
    <PageHeader iconText="...">やるべきこと</PageHeader>
    <Buttons>
      <LinkButton to="/todo/visual" type="outline" block>
        ビジュアル力を高める
      </LinkButton>
      <LinkButton to="/todo/expression" type="outline" block>
        表現力を高める
      </LinkButton>
      <LinkButton to="/todo/tech" type="outline" block>
        先端技術力を高める
      </LinkButton>
      <LinkButton to="/todo/application" type="outline" block>
        アプリケーション力を高める
      </LinkButton>
    </Buttons>
    <PageFooter>
      <LinkButton to="/" type="primary">
        さいしょにもどる
      </LinkButton>
    </PageFooter>
  </Page>
)

export default ToDo
