import * as React from 'react'

import styled from 'styled-components'

import { Themed } from '~/styles/theme'

const Container = styled.div`
  // layout
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;

  // appearance
  background-color: ${({ theme }: Themed) => theme.baseColor};

  // misc
  overflow: auto;
  text-align: center;
`

const Column = styled.div`
  // layout
  position: relative;
  margin-left: 30%;
  width: 40%;
  padding: 7em 0;

  @media (max-width: 800px) {
    width: 90%;
    margin-left: 5%;
  }
`

/**
 * ページレイアウト
 */
export const Page: React.SFC = ({ children }) => (
  <Container>
    <Column>{children}</Column>
  </Container>
)

export default Page
