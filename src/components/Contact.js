import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
		  <h1>Contact Renee</h1>
		  <div className="contact-info row">
		    <div className="col-md-4 renee-picture"></div>
		    <div className="col-md-6 social-media">
		      <ul className="contact-options">
		        <li>
		          <h2>
		            <a href="mailto:renee@reneey.com"><i className="fa fa-envelope-o"></i> renee@reneey.com</a>
		          </h2>
		        </li>
		        <li>
		          <h2>
		            <a href="https://www.linkedin.com/in/renee-char-42b2b3a0/"><i class="fa fa-linkedin-square"></i> Linked In</a>
		          </h2>
		        </li>
		        <li>
		          <h2>
		            <a href="https://github.com/reneechar/"><i class="fa fa-github-square"></i> GitHub</a>
		          </h2>
		        </li>
		      </ul>

		    </div>
		  </div>

		</section>
    );
  }
}

export default Contact;