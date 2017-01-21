import React, {Component} from 'react';
import info from '../config/info';

export default class PageHeader extends Component {


	render() {
		
		return (
			<div>
				<div className="hero">
					<div className="hero__inner">
							<h3>{ info.name },</h3>
							<h4>{ info.firstSentence }</h4>
							<h4>{ info.secondSentence }</h4>
					</div>
				</div>
			</div>
		);
	}
}