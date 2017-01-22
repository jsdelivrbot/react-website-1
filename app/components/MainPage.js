import React, {Component} from 'react';

import PageHeader from './PageHeader';
import FloatingButton from './FloatingButton';
import Perspective from './Perspective';
import Categories from './Categories';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import PageLoader from './PageLoader';
import { If, Then } from 'react-if';
import firebase from 'firebase';
import config from '../config/config';


const firebaseApp = firebase.initializeApp(config);
var UCRef = firebaseApp.database().ref("items");
//firebase.database.enableLogging(true);

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      perspective: '',
      container: '',
      menuTrigger: '',
      burgerMenu: '',
      nav: '',
      items: [],
      show: true
    }//initial state

  }//constructor

  componentDidMount(){
    let perspective = document.getElementsByClassName("perspective")[0];
    let container = document.getElementById("page-container");
    let menuTrigger = document.getElementById("menu");
    let nav = document.getElementsByClassName("close")[0];
    let burger = document.getElementsByClassName("burger")[0];

    UCRef.once('value', snapshot =>{
      snapshot.forEach((childSnapshot) => {
        this.state.items.push(childSnapshot.val());
      })
    });
    
    setTimeout(() => {
      this.setState({
          perspective: perspective,
          container: container,
          menuTrigger: menuTrigger,
          nav: nav,
          burger: burger,
          show: false
        });//setState
    },1000)

  }//didMount

  componentWillUpdate(){
    
  }

  componentWillUnmount(){
    this.setState({
      show: true
    });
  }//unMount

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
    let show = this.state.show;
		return (
			<div className="perspective">
        <div className="page-container" id="page-container">
          <If condition={ show }>
            <Then>
              <PageLoader  />
            </Then>
          </If>
          <PageHeader/>
          <FloatingButton handleMenu={this._handleMenu.bind(this)} />
          <Portfolio items={this.state.items} />
          <Contact />
          <Footer />
        </div>

        <Perspective />
      </div>
		);
	}
}