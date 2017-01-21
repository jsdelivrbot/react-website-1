import React, {Component} from 'react';

export default class PortfolioGrid extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
     this.setState({
      items: this.props.items
    });
    console.log("state of grid", this.props.items);
  }

	render() {
    let cards = this.props.items.map((item, index) => {
      return(
        <div key={index} className="col-6">{item.title}</div>
      );
    })
		return (
      <div className="row">
        {
          cards
        }
      </div>
		);
	}
}