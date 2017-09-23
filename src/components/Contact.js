import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
		  <h1>Contact Renee</h1>
		  <div class="contact-info row">
		    <div class="col-md-4 renee-picture"></div>
		    <div class="col-md-6 social-media">
		      <ul class="contact-options">
		        <li>
		          <h2>
		            <a href="mailto:renee@reneey.com"><i class="fa fa-envelope-o"></i> renee@reneey.com</a>
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