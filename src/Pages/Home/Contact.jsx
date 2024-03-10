function Contact() {
    return (
        <section id="Contact" className="contact-section">
            <div>
                <p className="sub-title"> Get In Touch</p>
                <h2>Contact Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, asperiores.</p>
            </div>
            <form className="contact-form-container">
                <div className="container">
                    <label 
                        htmlFor="firstName" 
                        className="contact-label"
                    >
                        <span className="text-md"> First Name</span>
                        <input 
                            type="text" 
                            className="contact-input text-md" 
                            name="first-name" 
                            id="first-name" 
                            required/>
                    </label>
                    <label 
                        htmlFor="lastName" 
                        className="contact-label"
                    >
                        <span className="text-md"> Last Name</span>
                        <input 
                            type="text" 
                            className="contact-input text-md" 
                            name="last-name" 
                            id="last-name" 
                            required/>
                    </label>
                    <label 
                        htmlFor="email" 
                        className="contact-label"
                    >
                        <span className="text-md">Email</span>
                        <input 
                            type="email" 
                            className="contact-input text-md" 
                            name="email" 
                            id="email" 
                            required/>
                    </label>
                    <label 
                        htmlFor="phoneNumber" 
                        className="contact-label"
                    >
                        <span className="text-md">Phone Number</span>
                        <input 
                            type="number" 
                            className="contact-input text-md" 
                            name="phone-number" 
                            id="phone-number" 
                            required/>
                    </label>
                </div>
                <label 
                        htmlFor="subject" 
                        className="contact-label"
                    >
                        <span className="text-md">Subject</span>
                        <input 
                            type="text" 
                            className="contact-input text-md" 
                            name="subject" 
                            id="subject" 
                            required/>
                    </label>
                    <label 
                        htmlFor="message" 
                        className="contact-label"
                    >
                        <span className="text-md">Message:</span>
                        <textarea  
                                className="contact-input text-md" 
                                id="message" 
                                required
                                rows="8"
                                placeholder="type your message"
                                >
                        </textarea>
                    </label>
                <div>
                    <button className="btn btn-primary contact-form-btn">Submit</button>
                </div>

            </form>
        </section>
    )
}

export default Contact;