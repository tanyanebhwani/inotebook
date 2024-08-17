import React from 'react';
import './contact-style.css';

const Contact = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        if (!name) {
            isValid = false;
            document.querySelector('.v-name').style.display = 'block';
        }
        if (!email) {
            isValid = false;
            document.querySelector('.v-email').style.display = 'block';
        }
        if (!subject) {
            isValid = false;
            document.querySelector('.v-subject').style.display = 'block';
        }
        if (!message) {
            isValid = false;
            document.querySelector('.v-message').style.display = 'block';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)&&email) {
            isValid = false;
            document.getElementsByClassName('v-email-valid')[0].style.display = 'block';
        }
        if (isValid) {
            const response = await fetch('https://inotebook-z6r2.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ name: name, email: email, subject: subject, message: message })
            });
            const json = await response.json();
            if (json.success) {
                props.showAlert("Message sent successfully", "success");
            }
            else {
                props.showAlert("Some problem occured", "danger");
            }
        }
    }
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
                    <div className="line"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            <div className="form-input">
                                <label for="name">Enter Your Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="error-message v-name">Name cannot be left blank</div>
                        </div>
                        <div className="form-field">
                            <div className="form-input">
                                <label for="email">Enter Your Email *</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="error-message v-email">Email cannot be left blank</div>
                            <div className="error-message v-email-valid">This email is not valid</div>
                        </div>
                        <div className="form-field">
                            <div className="form-input">
                                <label for="subject">Enter Your Subject</label>
                                <input type="text" id="subject" name="subject" />
                            </div>
                            <div className="error-message v-subject">Subject cannot be left blank.</div>
                        </div>
                        <div className="form-field">
                            <div className="form-input">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="4"></textarea>
                            </div>
                            <div className="error-message v-message">Message cannot be left blank</div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;