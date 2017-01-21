import React, {Component} from 'react';

export default class FloatingButton extends Component{
  constructor(props){
    super(props);

    console.log(this.props);
    this._handleMenu = this._handleMenu.bind(this);
  }

  _handleMenu(e){
    e.preventDefault();
    e.stopPropagation();

    this.props.handleMenu(e);
  }

  render(){
    return (
      <div className="floating-button" id="menu" onClick={this._handleMenu}>
        <div className="menu__text">
          <div className="burger"></div>
        </div>
      </div>
    );
  }
}