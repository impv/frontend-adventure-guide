import * as React from 'react'

import styled, { ThemeProvider } from 'styled-components'

import Button from '~/components/Button'

import { theme, Themed } from '~/styles/theme'

type ContainerProps = Themed

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${(props: ContainerProps) => props.theme.baseColor}

  overflow: auto;
`

const Buttons = styled.div`
  display: flex;
  padding: 1em;

  justify-content: space-between;
`

const App: React.StatelessComponent = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
)

export default App
