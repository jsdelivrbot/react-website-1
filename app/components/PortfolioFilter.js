import React, {Component} from 'react';

export default class PortfolioFilter extends Component {
	render() {
		return (
			<div>
        <h1>folio filter page</h1>
        <div>Choosen category is : {this.props.category}</div>
			</div>
		);
	}
}