import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PageNotFound extends Component {
	render() {
		return (
			<div className="header">
				<div className="section__content">
					<div className="map__icon"></div>
					<h2>Oops! It looks like you are lost.</h2>
					<h3>The page you are looking for does not exist.<Link to="/" >Go back</Link> to home page.</h3>
				</div>
			</div>
		);
	}
}