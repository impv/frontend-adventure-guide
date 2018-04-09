import * as React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import store from '~/store'

import CheckList from '~/pages/CheckList'
import SkillChart from '~/pages/SkillChart'
import ToDo from '~/pages/ToDo'
import ToDoDetails from '~/pages/ToDoDetails'

export const ConnectedRouter: React.SFC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={CheckList} />
      <Route exact path="/skill" component={SkillChart} />
      <Route exact path="/todo" component={ToDo} />
      <Route exact path="/todo/:gener" component={ToDoDetails} />
    </div>
  </BrowserRouter>
)
