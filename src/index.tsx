import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import { theme } from '~/styles/theme'

import store from './store'

import App from '~/components/App'

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
