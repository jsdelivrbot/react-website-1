import React, {Component} from 'react';

export default class Perspective extends Component {
	render() {
		return (
        <nav className="close">
          <div className="oh">
            <ul>
              <li><a href="http://github.com/kekebeen" rel="noopener noreferrer" target="_blank">Github</a></li>
              <li><a href="http://codepen.io/bbabic" rel="noopener noreferrer" target="_blank">Codepen</a></li>
              <li>
                <a href="javascript:void(0)">
                  Made with 
                  <svg className="heart" viewBox="0 0 32 29.6" width="16px" height="16px">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                  </svg>
                  by Benjamin Babic.
                </a>
              
              </li>
            </ul>
          </div>
        </nav>
		);
	}
}