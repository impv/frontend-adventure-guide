import * as React from 'react'

import styled from 'styled-components'

import Button from '~/components/Button'
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
      <Link to="/todo">
        <Button type="primary">なにをすればいい?</Button>
      </Link>
      <Link to="/">
        <Button type="outline">えらびなおす</Button>
      </Link>
    </PageFooter>
  </Page>
)

export default SkillChartPage

const ChartContainer = styled.div`
  // layout
  display: flex;
  justify-content: space-around;
`
