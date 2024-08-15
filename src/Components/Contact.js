import React from 'react';
import './contact-style.css';

const Contact = () => {
    return (
        <div className="contact-content">
            <div class="contact-container">
                <div class="contact-info">
                    <h2>CONTACT</h2>
                    <p>500 Terry Francine Street,<br />
                        San Francisco, CA 94158</p>
                    <p>Tel: 123-456-7890<br />
                        Fax: 123-456-7890</p>
                    <p>Email: info@mysite.com</p>
                    <div class="social-icons">
                        <div className="social-item item-1"></div>
                        <div className="social-item item-2"></div>
                        <div className="social-item item-3"></div>
                    </div>
                    <p>© 2024 by Inotebook<br />
                        Powered and secured by <a href="#">Inotebook</a></p>
                </div>

                <div class="contact-form">
                    <form>
                        <label for="name">Enter Your Name</label>
                        <input type="text" id="name" name="name" required />

                        <label for="email">Enter Your Email *</label>
                        <input type="email" id="email" name="email" required />

                        <label for="subject">Enter Your Subject</label>
                        <input type="text" id="subject" name="subject" />

                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4"></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;