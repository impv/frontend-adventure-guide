import * as React from 'react'

import { BrowserRouter, Redirect, Route } from 'react-router-dom'

import store from '~/store'

import CheckList from '~/pages/CheckList'
import SkillChart from '~/pages/SkillChart'
import ToDo from '~/pages/ToDo'
import $ToDoDetails from '~/pages/ToDoDetails'

export const ConnectedRouter: React.SFC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={CheckList} />
      <Route exact path="/skill" component={PurposeSelectedGuard(SkillChart)} />
      <Route exact path="/todo" component={PurposeSelectedGuard(ToDo)} />
      <Route
        exact
        path="/todo/:ability"
        render={({ match }) => <ToDoDetails params={match.params} />}
      />
    </div>
  </BrowserRouter>
)

// やりたいことが指定されていない場合にやりたいことリストへリダイレクトする
const PurposeSelectedGuard: (
  c: React.SFC<any>
) => React.SFC<any> = Component => props =>
  store.getState().purpose.purposes.filter(p => p.selected).length > 0 ? (
    <Component {...props} />
  ) : (
    <Redirect to="/" />
  )

const ToDoDetails = PurposeSelectedGuard($ToDoDetails)
