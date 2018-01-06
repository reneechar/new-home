import React, { Component } from 'react';
import './styles/contact.scss';
import { FaLinkedinSquare, FaEnvelopeO } from 'react-icons/lib/fa'
import Gh from 'react-icons/lib/go/mark-github'
import ContactForm from './ContactForm';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
		  <h1>Contact Renee</h1>
      <div className="contact-info">
        <div className="renee-picture"></div>
		    <div className="social-media">
		      <ul className="contact-options">
		        <li>
		          <h2>
		            <a href="https://www.linkedin.com/in/renee-char-42b2b3a0/"><FaLinkedinSquare /> Linked In</a>
		          </h2>
		        </li>
		        <li>
		          <h2>
		            <a href="https://github.com/reneechar/"><Gh /> GitHub</a>
		          </h2>
		        </li>
            <li>
              <h2>
                <a href="mailto:renee@reneey.com"><FaEnvelopeO /> renee@reneey.com</a>
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