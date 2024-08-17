import React from 'react';
import './help-style.css';
import { useState } from 'react';
const Help = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        const email = document.getElementById('email').value;
        const question = document.getElementById('question').value;
        console.log(question);
        if (!email) {
            isValid = false;
            document.querySelector('.v-email').style.display = 'block';
        }
        if (!question) {
            isValid = false;
            document.querySelector('.v-question').style.display = 'block';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(email);
        if (email && !emailRegex.test(email)) {
            isValid = false;
            document.getElementsByClassName('v-email-valid')[0].style.display = 'block';
        }
        if (isValid) {
            const response = await fetch('https://inotebook-z6r2.onrender.com/api/help/faq', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ email: email, question: question })
            });
            const json = await response.json();
            if (json.success) {
                props.showAlert("query sent successfully", "success");
            }
            else {
                props.showAlert("some problem occured", "danger");
            }
        }
    }
    const [down, setDown] = useState(0);
    const expand = () => {
        console.log(document.getElementsByClassName('ask-question'));
        console.log('listening');
        const form = document.getElementsByClassName('ask-form')[0];
        if (down === 0) {
            form.style.height = '50vh';
            form.style.display = 'flex';
            document.getElementById('expand-button').classList.remove('fa-angle-up');
            document.getElementById('expand-button').classList.add('fa-angle-down');
            setDown(1);
        }
        else if (down === 1) {
            form.style.display = 'none';
            form.style.height = '0vh';
            document.getElementById('expand-button').classList.remove('fa-angle-down');
            document.getElementById('expand-button').classList.add('fa-angle-up');
            setDown(0);
        }
    };
    const style = {
        backgroundColor: `transparent`
    }
    return (
        <>
            <section id="faq" class="faq-section">
                <div class="container" style={style}>
                    <h2 class="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
                    <div class="accordion faq-accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    1. What is the Urban Mobility Planner?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    The Urban Mobility Planner is a web-based application that helps
                                    users find the shortest route between any two places, providing
                                    the distance and estimated travel time. It utilizes the Mapbox
                                    API for route calculations.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    2. How do I create an account?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    To create an account, click on the "Sign Up" button on the
                                    homepage, fill in the required details, and submit the form. You
                                    will receive a confirmation email to verify your account.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    3. Do I need to log in to use the application?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    You can use the application to calculate routes without logging
                                    in. However, to save your favorite routes, you need to log in.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    4. How can I save a route?
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Once you have calculated a route, you can save it by clicking
                                    the "Save Route" button. You must be logged in to save routes.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    5. How can I view my saved routes?
                                </button>
                            </h2>
                            <div
                                id="collapseFive"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    After logging in, go to the "Favorites" section to view your
                                    saved routes.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                >
                                    6. How can I delete a saved route?
                                </button>
                            </h2>
                            <div
                                id="collapseSix"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    In the "Favorites" section, each saved route has a "Delete"
                                    button. Click it to remove the route from your favorites.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSeven"
                                    aria-expanded="false"
                                    aria-controls="collapseSeven"
                                >
                                    7. How does the application calculate routes?
                                </button>
                            </h2>
                            <div
                                id="collapseSeven"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    The application uses the Mapbox API to calculate the shortest
                                    route between the specified start and end locations, providing
                                    the distance and estimated travel time.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseEight"
                                    aria-expanded="false"
                                    aria-controls="collapseEight"
                                >
                                    8. Can I use the application on my mobile device?
                                </button>
                            </h2>
                            <div
                                id="collapseEight"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Yes, the Urban Mobility Planner is designed to be responsive and
                                    works on various devices, including mobile phones and tablets.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseNine"
                                    aria-expanded="false"
                                    aria-controls="collapseNine"
                                >
                                    9. What are the future enhancements planned for the Urban
                                    Mobility Planner?
                                </button>
                            </h2>
                            <div
                                id="collapseNine"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Future enhancements include integrating weather conditions and
                                    traffic analysis for routes, providing route history, and
                                    enabling route sharing through social media platforms like
                                    WhatsApp.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTen"
                                    aria-expanded="false"
                                    aria-controls="collapseTen"
                                >
                                    10. How does the Urban Mobility Planner contribute to
                                    sustainable development?
                                </button>
                            </h2>
                            <div
                                id="collapseTen"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    By optimizing routes and integrating traffic and weather data in
                                    the future, the Urban Mobility Planner aims to reduce travel
                                    time and fuel consumption, contributing to sustainable urban
                                    mobility and aligning with the United Nations Sustainable
                                    Development Goals (SDGs).
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseEleven"
                                    aria-expanded="false"
                                    aria-controls="collapseEleven"
                                >
                                    11. What technologies are used in the Urban Mobility Planner?
                                </button>
                            </h2>
                            <div
                                id="collapseEleven"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    The front end is developed using HTML, CSS, JavaScript, and
                                    Bootstrap. The back end uses MongoDB, Express, and the Mapbox
                                    API. We also use Thunder Client for testing endpoints.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwelve"
                                    aria-expanded="false"
                                    aria-controls="collapseTwelve"
                                >
                                    12. Is my data secure?
                                </button>
                            </h2>
                            <div
                                id="collapseTwelve"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Yes, user data is securely stored, and passwords are encrypted
                                    using bcrypt before being saved in the database. We also use JWT
                                    tokens to manage user sessions securely.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThirteen"
                                    aria-expanded="false"
                                    aria-controls="collapseThirteen"
                                >
                                    13. Can I share my routes with others?
                                </button>
                            </h2>
                            <div
                                id="collapseThirteen"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Route sharing is a planned feature for future updates. You will
                                    be able to share routes via WhatsApp or other social media
                                    platforms.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFourteen"
                                    aria-expanded="false"
                                    aria-controls="collapseFourteen"
                                >
                                    14. What should I do if I encounter a problem with the
                                    application?
                                </button>
                            </h2>
                            <div
                                id="collapseFourteen"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    If you encounter any issues, please contact our support team
                                    through the "Contact Us" section on the website. We will assist
                                    you as soon as possible.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFifteen"
                                    aria-expanded="false"
                                    aria-controls="collapseFifteen"
                                >
                                    15. Is there a way to provide feedback or suggest new features?
                                </button>
                            </h2>
                            <div
                                id="collapseFifteen"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    Yes, we welcome feedback and suggestions. Please use the
                                    "Feedback" section on the website to share your thoughts and
                                    ideas.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ask-ques-section">
                <div className="ask-question-content">
                    <div className="ask-question">
                        <h3>Ask a question</h3>
                        <i className="fa-solid fa-angle-up" id='expand-button' onClick={expand}></i>
                    </div>
                    <form className="ask-form" onSubmit={handleSubmit}>
                        <div className="ask-field">
                            <div className="ask-input">
                                <label for="email">Enter Your Email *</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="error-message v-email">Email cannot be left blank.</div>
                            <div className="error-message v-email-valid">Email is not valid.</div>
                        </div>
                        <div className="ask-field">
                            <div className="ask-input">
                                <label for="question">Write your question</label>
                                <textarea id="question" name="question" rows="4"></textarea>
                            </div>
                            <div className="error-message v-question">Question cannot be left blank.</div>
                        </div>
                        <button type="submit" className="bttn btn-submit" >Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Help