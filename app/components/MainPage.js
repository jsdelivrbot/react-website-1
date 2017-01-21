import React, {Component} from 'react';

import PageHeader from './PageHeader';
import FloatingButton from './FloatingButton';
import Perspective from './Perspective';

export default class MainPage extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      perspective: '',
      container: '',
      menuTrigger: '',
      burgerMenu: '',
      nav: '',
      items: []
    }//initial state

    this.setState = this.setState.bind(this);
  }//constructor

  componentDidMount(){
    let perspective = document.getElementsByClassName("perspective")[0];
    let container = document.getElementById("page-container");
    let menuTrigger = document.getElementById("menu");
    let nav = document.getElementsByClassName("close")[0];
    let burger = document.getElementsByClassName("burger")[0];

    this.state = {
      perspective: perspective,
      container: container,
      menuTrigger: menuTrigger,
      nav: nav,
      burger: burger
    };//setState

  }//didMount

  _handleMenu(e) {

    if (this.state.perspective.classList.contains("modalView")) {
        this.state.perspective.classList.remove("animate");
        this.state.perspective.classList.remove("showMenu");
        this.state.burger.classList.remove("open");
        this.state.menuTrigger.classList.remove("open");
        setTimeout(() => { this.state.perspective.classList.remove('modalView'); }, 400);
    } else {
        this.state.perspective.classList.add("animate", "modalView", "showMenu");
        this.state.burger.classList.add("open");
        this.state.menuTrigger.classList.add("open");
    }

  }//handle navigation open

	render() {
		return (
			<div className="perspective">
        <div className="page-container" id="page-container">
          <PageHeader/>
          <FloatingButton handleMenu={this._handleMenu.bind(this)} />
        </div>

        <Perspective />
      </div>
		);
	}
}