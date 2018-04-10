import * as React from 'react'

import LinkButton from '~/components/LinkButton'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

import { Link } from 'react-router-dom'

import PurposeSelector from '~/containers/PurposeSelector'
import SkillChartLink from '~/containers/SkillChartLink'

const CheckList: React.SFC = () => (
  <Page>
    <PageHeader iconText="?">あなたのやりたいことは?</PageHeader>
    <PurposeSelector />
    <PageFooter>
      <SkillChartLink to="/skill" type="primary">
        つぎへ
      </SkillChartLink>
    </PageFooter>
  </Page>
)

export default CheckList
