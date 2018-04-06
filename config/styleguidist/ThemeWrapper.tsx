import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '~/styles/theme'

const ThemeWrapper: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
