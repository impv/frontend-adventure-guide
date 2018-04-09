import * as React from 'react'

import styled from 'styled-components'

/**
 * ページ下部の領域
 */
export const PageFooter: React.SFC = ({ children }) => (
  <Container>
    <Column>{children}</Column>
  </Container>
)

export default PageFooter

const Container = styled.div`
  // layout
  display: flex;
  justify-content: center;
  padding-top: 4em;
`

const Column = styled.div`
  // layout
  display: flex;
  flex-direction: column;
  > *:not(:first-child) {
    margin-top: 1.5em;
  }
`
