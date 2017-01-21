import React, {Component} from 'react';
import PortfolioDescription from './PortfolioDescription';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import info from '../config/info';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items
    }

    this.renderCard = this.renderCard.bind(this);
  }

  componentDidMount(){
    //setState when link choosen or something
  }

  renderCard (key) {
    return <Card key={key} index={key} card={this.state.items[key]} />
  }
	render() {
		return (
			<section className="section">
        <div className="container large-container">
          <PortfolioDescription title={info.portfolioDescription.title} description={info.portfolioDescription.description}/>
        </div>

        <div className="container large-container">
          <div className="row">
          {
            this.state.items.map((item,i) => {
              return (
                <div className="col-4">
                  <div className="card">
                    <div className="card__inner">
                      <CardHeader image={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg"} tag={item.tag}/>
                      <CardBody title={item.title} desc={item.desc} tag={item.tag} />
                    </div>
                  </div>
                </div>
              );
            })
          }
          </div>
        </div>
        
			</section>
		);
	}
}

Portfolio.propTypes = {
  items: React.PropTypes.array
}