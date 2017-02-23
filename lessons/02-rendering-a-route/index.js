import React from 'react'
import {render} from 'react-dom'
import App from './modules/App'
import {Router, Route, hashHistory} from 'react-router'
import About from './modules/About'
import Repos from './modules/Repo'

render(<App/>, document.getElementById('app'))

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))