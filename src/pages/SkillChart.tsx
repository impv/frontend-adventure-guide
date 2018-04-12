import * as React from 'react'

import styled from 'styled-components'

import LinkButton from '~/components/LinkButton'
import BackButton from '~/components/BackButton'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

import SkillChart from '~/containers/SkillChart'

const SkillChartPage: React.StatelessComponent = () => (
  <Page>
    <PageHeader iconText="!">あなたに必要なスキル</PageHeader>
    <ChartContainer>
      <SkillChart />
    </ChartContainer>
    <PageFooter>
      <LinkButton to="/todo" type="primary">
        なにをすればいい?
      </LinkButton>
      <BackButton type="outline">えらびなおす</BackButton>
    </PageFooter>
  </Page>
)

export default SkillChartPage

const ChartContainer = styled.div`
  // layout
  display: flex;
  justify-content: space-around;
`
