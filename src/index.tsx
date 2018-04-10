import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import { theme } from '~/styles/theme'

import { ConnectedRouter } from '~/router'
import store from '~/store'

import { purposes } from '~/config/purposes.yml'
import { setPurposes } from '~/store/modules/purpose'

// ストアの初期化
store.dispatch(setPurposes({ purposes }))

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
