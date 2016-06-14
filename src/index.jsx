import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, browserHistory} from 'react-router'
import App from './components/App'
import Voting from './components/Voting'

const routes = <Route component={App}>
  <Route path="/" component={Voting} />
</Route>

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
  )
