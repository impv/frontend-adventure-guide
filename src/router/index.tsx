import * as React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'

import store from '~/store'

import CheckList from '~/pages/CheckList'
import SkillChart from '~/pages/SkillChart'

export const ConnectedRouter: React.SFC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={CheckList} />
      <Route exact path="/skill" component={SkillChart} />
    </div>
  </BrowserRouter>
)
