import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating form submission or using FormSubmit.co logic if integrated
        // For a real static site, method="POST" action="https://formsubmit.co/..." is easier
        // But since this is React, we can fetch.

        try {
            const response = await fetch("https://formsubmit.co/ajax/chitransh529@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormState({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Form error:", error);
        }

        setIsSubmitting(false);
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In <span className="highlight">Touch</span>
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-info glass-card"
                    >
                        <h3>Let's Connect</h3>
                        <p>
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><Mail className="icon" /></div>
                                <span>chitransh529@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><Phone className="icon" /></div>
                                <span>+91-8630819062</span>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><MapPin className="icon" /></div>
                                <span>Ghaziabad, India</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/chitransh-0c23" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/chitransh529" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-form-container glass-card"
                    >
                        {submitted ? (
                            <div className="success-message">
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out. I'll get back to you soon.</p>
                                <button onClick={() => setSubmitted(false)} className="btn-reset">Send another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
