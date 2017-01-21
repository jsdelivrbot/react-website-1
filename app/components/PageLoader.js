import React, {Component} from 'react';

export default class PageLoader extends Component {
	render() {
		return (
			<div className="spinner-container">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
        <div className="load-text">loading <span></span></div>
			</div>
		);
	}
}