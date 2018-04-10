import * as React from 'react'

import Button from '~/components/Button'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

import PurposeSelector from '~/containers/PurposeSelector'

const CheckList: React.SFC = () => (
  <Page>
    <PageHeader iconText="?">あなたのやりたいことは?</PageHeader>
    <PurposeSelector />
    <PageFooter>
      <Link to="/skill">
        <Button type="primary">つぎへ</Button>
      </Link>
    </PageFooter>
  </Page>
)

export default CheckList
