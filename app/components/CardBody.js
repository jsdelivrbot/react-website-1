import React, {Component} from 'react';

export default class CardBody extends Component {
 
	render() {
    let title = this.props.title;
    let desc = this.props.desc;
    let tag = this.props.tag;
    
		return (
     <div className="card-body">
       <p className="date">March 20 2017</p>
       <h2>{title}</h2>
       <p className="body-content">{desc}</p>

             
      </div>
		);
	}
}