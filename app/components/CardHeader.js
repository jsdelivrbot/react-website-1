import React, {Component} from 'react';

export default class CardHeader extends Component {
 
	render() {
    let image = this.props.image;
    let tag = this.props.tag;
    let style= {
      backgroundImage: 'url(' + image + ')' 
    };
    
		return (
     <header style={style} className="card-header">
       <h4 className="card-header--title">{tag}</h4>
      </header>
		);
	}
}