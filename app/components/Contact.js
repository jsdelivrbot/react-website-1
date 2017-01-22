import React, {Component} from 'react';

import ContactForm from './ContactForm';

export default class Contact extends Component {

	render() {

		return (
     <section className="section contact">
      <div className="container large-container">

        <div className="row">

          <div className="col-6">
            <div className="footer">
                <h3 className="footer__header">Get in Touch.</h3>
                <div className="footer__quote">
                  <p>If you want to work with me,<br/> have a chat or ask me about anything,<br/> 
                  feel free to contact me.</p>
                </div>
                <div className="copyright">
                  © benjaminbabic.com. All rights reserved
                </div>
              </div>
          </div>

          <div className="col-6">
            <ContactForm />
          </div>

        </div>
        
      </div>
      </section>
		);
	}
}