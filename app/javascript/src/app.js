import React, {Component} from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Login from './containers/login'
import Home from './containers/home'

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Login} />
            <Route path="/home/index" component={Home} />
        </BrowserRouter>
    )
  }
}