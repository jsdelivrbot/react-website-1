import React, {Component} from 'react';
import axios from 'axios';
import Alert from 'react-s-alert';

export default class ContactForm extends Component {
	constructor(props){
		super(props);

		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}

	_handleFormSubmit(e) {
		e.preventDefault();
		let form = document.querySelector("form");
		let url = "http://formspree.io/kakosi69@gmail.com";
		let name = this.refs.name.value.trim();
		let email = this.refs.email.value.trim();
		let message = this.refs.message.value.trim();

		//axios post - toast show on success
		axios.post(url, {
			data: {
				name: name,
				email: email,
				message: message
			}
		})
		.then(function (response){
				Alert.success("Your message has been sent successfully.", {
					position: 'bottom-right',
					effect: 'bouncyflip'
				});

				form.reset();
		})
		.catch(function (error) {
			Alert.error("Oops, there seems to be an error sending your message.Please try again !", {
				position: 'bottom-right',
				effect: 'bouncyflip'
			})
			
			form.reset();
		});//axios

	}


	render() {

		return (
      <div className="contact__form row">
				<Alert />
				<h3 className="footer__header">Contact form.</h3>
				<form action="http://formspree.io/kakosi69@gmail.com" method="POST" onSubmit={this._handleFormSubmit}>
					<div className="col-6">
						<label htmlFor="name" className="label-input">
							<input type="text" name="name" ref="name" placeholder="e.g. Ben" required/>
							<div>Your name</div>
						</label>
					</div>

					<div className="col-6">
						<label htmlFor="email" className="label-input">
							<input type="email" name="email" ref="email" placeholder="e.g. abc@gmail.com" required/>
							<div>Your email</div>
						</label>
					</div>

					<div className="col-12">
						<textarea name="message" placeholder="Your message" ref="message"></textarea>
					</div>
					
					<div className="col-12">
						<button name="button" type="submit" className="button button--primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}