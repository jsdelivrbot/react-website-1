import React, {Component} from 'react';
import PortfolioDescription from './PortfolioDescription';
import Work from './Work';
import Lab from './Lab';

import info from '../config/info';
import { If, Then, Else } from 'react-if';

import Loading from 'react-loading-animation';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items,
      filter: 'work',
      filtered: this.props.items,
      show: true
    }

    this._handleFilter = this._handleFilter.bind(this);
    this._filterItems = this._filterItems.bind(this);
  }

_handleFilter(tag){
  this.setState({
    filter: tag
  })
}//handleFilter

_filterItems(query){
  let items = this.state.items;
  let queryResult = []

  if(query.length > 0){
    items.forEach(function(item){
          if(item.tag.toLowerCase().indexOf(query) != -1)
          queryResult.push(item);
      })
  }else{
    queryResult = items;
  }
  

  this.setState({
    filtered: queryResult
  })
}//filterItems

componentDidMount(){
  this.setState({
    show: false
  })
}

	render() {
    const filter = this.state.filter;
		return (
			<section className="section">
        <div className="container large-container">
          <PortfolioDescription title={info.portfolioDescription.title}
                                 description={info.portfolioDescription.description}
                                 handleFilter={this._handleFilter}
                                 filterItems={this._filterItems}/>
        </div>

        <div className="container large-container">
          <div className="row">
            <Loading isLoading={this.state.show}/>
            <If condition={filter == "work"}>
              <Then>
                <Work items={this.state.filtered} />
              </Then>
              <Else>
                <Lab items={this.state.filtered} />
              </Else>
            </If>
          </div>
        </div>
			</section>
		);
	}
}
