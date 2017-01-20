import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';

let routes = 
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/" component={Home}>
      
      </Route>

      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>

export default routes