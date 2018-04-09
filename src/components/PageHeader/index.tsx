import * as React from 'react'

import styled from 'styled-components'

import Icon from '~/components/Icon'
import Title from '~/components/Title'

interface Props {
  /** アイコンとして表示するテキスト */
  iconText: string
}

/**
 * ページ上部の領域
 */
export const PageHeader: React.SFC<Props> = ({ iconText, children }) => (
  <div>
    <Container>
      <Icon>{iconText}</Icon>
    </Container>
    <TitleContainer>
      <Title>{children}</Title>
    </TitleContainer>
  </div>
)

export default PageHeader

const Container = styled.div`
  // layout
  display: flex;
  justify-content: center;
`

const TitleContainer = Container.extend`
  // layout
  padding: 3em 0;
`
