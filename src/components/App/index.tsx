import * as React from 'react'

import styled from 'styled-components'

import Button from '~/components/Button'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: #f8ba69;

  overflow: auto;
`

const Buttons = styled.div`
  display: flex;
  padding: 1em;

  justify-content: space-between;
`

const App: React.StatelessComponent = () => (
  <Container>
    <Buttons>
      <Button>Hello, World!</Button>
      <Button type="outline">Hello, World!</Button>
      <Button type="primary">Hello, World!</Button>
    </Buttons>
    <Buttons>
      <Button type="outline" block>
        Hello, World!
      </Button>
    </Buttons>
  </Container>
)

export default App
