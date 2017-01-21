import React, {Component} from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default class Card extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      card: props.card
    }
  }

  componentDidMount(){

  }
	render() {

		return (
     <div className="card">
      <div className="card__inner">
        <CardHeader image={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg"} tag={card.tag}/>
        <CardBody title={card.title} desc={card.desc} tag={card.tag} />
      </div>
     </div>
		);
	}
}

Card.propTypes = {
  card: React.PropTypes.object.isRequired
}
module.exports = Card;