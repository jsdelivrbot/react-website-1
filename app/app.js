import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';
require("./stylesheets/main.scss");

ReactDOM.render (
	<Router
		history={browserHistory}
		routes={routes}
		/>,
		document.getElementById('app')
)