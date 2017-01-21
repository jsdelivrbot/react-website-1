import React, {Component} from 'react';

export default class CardBody extends Component {
 
 componentDidMount(){
   console.log("inside card boyd", this.props.tags);
 }

  dynamicClass (tagName){
    return "devicon-" + tagName + "-plain colored";
 }
	render() {
    let title = this.props.title;
    let desc = this.props.desc;
    let tag = this.props.tag;
    let tags = this.props.tags;

		return (
     <div className="card-body">
       <p className="date">March 20 2017</p>
       <h2>{title}</h2>
       <p className="body-content">{desc}</p>
       <ul className="card__tags">
        {
          tags.map((item,key) => {
            return (
              <li key={key}>
                <i className={this.dynamicClass(item)} key={key}></i>
              </li>
            );
          })
        }
       </ul>
      </div>
		);
	}
}