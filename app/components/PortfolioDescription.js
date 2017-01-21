import React, {Component} from 'react';
import {Link} from 'react-router';
import PortfolioFilter from './PortfolioFilter';

export default class PortfolioDescription extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: 'work'
    }
  }
	render() {
    let title = this.props.title;
    let desc  = this.props.description;
    let active = this.state.active;
		return (
      <div className="row">
          
        <div className="col-6">
          <div className="section__title">
            <div className={active == 'work' ? 'active' : ''}><h1>Work</h1></div>
            <div className={active == 'lab' ? 'active' : ''}><h1>Lab</h1></div>
            <p>
              { desc? desc : 'Please select category on the right side of this page.' }
            </p>
          </div>
        </div>

        <div className="col-6">
          <div className="portfolio__filter">
            <h3>Filter by technology used: </h3>
            <input type="search" name="filter-input" placeholder="e.g. js,react,php,c#,wp" />
          </div>
        </div>

      </div>
		);
	}
}