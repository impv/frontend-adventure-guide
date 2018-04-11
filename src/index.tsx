import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import { theme } from '~/styles/theme'

import { App } from '~/router'
import store from '~/store'

import { purposes } from '~/config/purposes.yml'
import { skills } from '~/config/skills.yml'

import { setPurposes } from '~/store/modules/purpose'
import { setSkillDetails } from '~/store/modules/skillDetail'

// ストアの初期化
store.dispatch(setPurposes({ purposes }))
store.dispatch(setSkillDetails({ details: skills }))

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
