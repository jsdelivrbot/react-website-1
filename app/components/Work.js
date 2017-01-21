import React, {Component} from 'react';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';


export default class Work extends Component {
  constructor(props){
    super(props);

  }

  render(){
    const items = this.props.items;

    return (
      <div className="row">
      {
        items.map((item) => {
          if(item.cat == "work"){
            return(
              <div className="col-4" key={item.title.toString()}>
                <div className="card">
                  <div className="card__inner">
                    <CardHeader image={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg"} tag={item.tag}/>
                    <CardBody title={item.title} desc={item.desc} tag={item.tag} />
                  </div>
                </div>
              </div>
            );
          }
        })
      }
      </div>
    )
  }
}