import React, {Component} from 'react';
import {Link} from 'react-router';
import PortfolioFilter from './PortfolioFilter';

export default class PortfolioDescription extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: 'work'
    }

    this._handleFilter = this._handleFilter.bind(this);
    this._filterItems = this._filterItems.bind(this);
  }

  _handleFilter(e){
    let filter = e.target.getAttribute("data-filter");
    this.setState({
      active: filter
    })

    this.props.handleFilter(filter);
  }

  _filterItems(e){
    e.preventDefault();

    let query = e.target.value.toLowerCase();

    this.props.filterItems(query);
  }

	render() {
    let title = this.props.title;
    let desc  = this.props.description;
    let active = this.state.active;
		return (
      <div className="row">
          
        <div className="col-6">
          <div className="section__title">
            <ul className="filter">
              <li><h3 className={active == 'work' ? 'active' : ''} data-filter="work" onClick={this._handleFilter}>Work</h3></li>
              <li><h3 className={active == 'work' ? 'active' : ''} data-filter="lab" onClick={this._handleFilter}>Lab</h3></li>
            </ul>
            <p>
              { desc? desc : 'Please select category on the right side of this page.' }
            </p>
          </div>
        </div>

        <div className="col-6">
          <div className="portfolio__filter">
            <h3>Filter by technology used: </h3>
            <input type="search" name="filter-input" placeholder="e.g. js,react,php,c#,wp" onChange={this._filterItems}/>
          </div>
        </div>

      </div>
		);
	}
}