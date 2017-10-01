import React, { Component } from 'react';
import './styles/contact-form.scss';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };

    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.openConfirmationModal = this.openConfirmationModal.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }
  validateName(e) {
    console.log(document.getElementById("form").offsetHeight)
    console.log(document.getElementById("form").offsetWidth)
    this.setState({name: e.target.value});
  }
  validateEmail(e) {
    this.setState({email: e.target.value});
    var emailField = document.getElementById("email");
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)) {
      emailField.className = 'valid';
    } else {
      emailField.className = 'invalid';
    }
  }

  handleSubmission(e) {
    e.preventDefault();
    console.log('submitted!')
    var emailField = document.getElementById("email");
    if (emailField.className === 'invalid') {
      console.log('please enter a valid email address');
    } else {
      var form = document.getElementById("form");
      var completedForm = document.getElementById("completedForm");
      form.style.display = "none";
      this.openConfirmationModal();
    }
  }

  openConfirmationModal() {
    var modal = document.getElementById("notification-modal");
    var span = document.getElementsByClassName("close-notification")[0];
    modal.style.display = "block";
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmission}>
          <label>Name *</label>
          <input type="text" value={this.state.name} onChange={this.validateName} required/>
          <label>Email *</label>
          <input id="email" type="text" value={this.state.email} onChange={this.validateEmail} required/>
          <label>Message</label>
          <textarea rows="4" cols="50"></textarea>
          <button>Send</button>
        </form>
        <div id="notification-modal" className="notification-modal">
          <div className="notification-modal-content">
            <span className="close-notification">×</span>
            <h1>Message Sent!</h1>
            <h3>Thank you for reaching out! We'll be in touch soon.</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;