import * as React from 'react'

import Button from '~/components/Button'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

const CheckList: React.StatelessComponent = () => (
  <Page>
    <PageHeader iconText="!">あなたに必要なスキル</PageHeader>
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

export default CheckList
