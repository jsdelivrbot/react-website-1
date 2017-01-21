import React, {Component} from 'react';
import {Link} from 'react-router';

import cat_1 from '../images/cat_1.png';
import cat_2 from '../images/cat_2.png';

export default class Categories extends Component {
	render() {
		return (
			<section className="category__section">
        <div className="container large-container">
          <div className="row">
          
            <div className="col-6">
              <div className="category">
                <img src={cat_1} alt="Recent work" />
                <div className="category__caption category-1">
                  <Link to="/work" activeClassName="active">Work</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="category">
                <img src={cat_2} alt="Experiments" />
                <div className="category__caption category-2">
                  <Link to="/lab" activeClassName="active">Experiments</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
			</section>
		);
	}
}