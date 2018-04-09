import * as React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'

import store from '~/store'

import App from '~/components/App'

export const ConnectedRouter: React.SFC = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
  </BrowserRouter>
)
