import React, {Component} from 'react';
import MainPage from './MainPage';

export default class Home extends Component {
	render() {
		return (
			<div className="perspective">
        <div className="page-container" id="page-container">
          <MainPage></MainPage>
        </div>
			</div>
		);
	}
}