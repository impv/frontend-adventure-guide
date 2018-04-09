import * as React from 'react'

import Button from '~/components/Button'
import CheckItem from '~/components/CheckItem'
import Page from '~/components/Page'
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'

const wants = [
  'なにかしたいのだ',
  'なにかわしゃわしゃしたいのだ',
  'なにかしたいのだ',
  'なにかもふもふしたくてたまらないのだ'
]

const CheckList: React.StatelessComponent = () => (
  <Page>
    <PageHeader iconText="?">あなたのやりたいことは?</PageHeader>
    {wants.map((want, i) => (
      <CheckItem key={i} checked>
        {want}
      </CheckItem>
    ))}
    <PageFooter>
      <Button type="primary">つぎへ</Button>
      <Button type="outline">やっぱやめた</Button>
    </PageFooter>
  </Page>
)

export default CheckList
