import * as React from 'react'

import Button from '~/components/Button'
import CheckItem from '~/components/CheckItem'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

import { purposes } from '~/config/purposes.yml'

const CheckItems: React.SFC = () => (
  <div>
    {purposes.map(({ purpose }) => (
      <CheckItem key={purpose} checked>
        {purpose}
      </CheckItem>
    ))}
  </div>
)

const CheckList: React.StatelessComponent = () => (
  <Page>
    <PageHeader iconText="?">あなたのやりたいことは?</PageHeader>
    <CheckItems />
    <PageFooter>
      <Link to="/skill">
        <Button type="primary">つぎへ</Button>
      </Link>
    </PageFooter>
  </Page>
)

export default CheckList
