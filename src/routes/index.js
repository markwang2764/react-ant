import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './Home/Home'
import Details from './Details/Details'
class Index extends React.Component {

  render(){
    return (
      <Router history={browserHistory}>
        <Route component={Home} path="/">
        </Route>
        <Route component={Details} path="details/:uniquekey">
        </Route>
      </Router>
    )
  }
}

export default Index;
