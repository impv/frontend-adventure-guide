import * as React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'

import store from '~/store'

import CheckList from '~/pages/CheckList'

export const ConnectedRouter: React.SFC = () => (
  <BrowserRouter>
    <Route exact path="/" component={CheckList} />
  </BrowserRouter>
)
