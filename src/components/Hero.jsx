import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container">
                <div className="hero-grid">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="hero-text-content"
                    >
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="hero-greeting"
                        >
                            Hello, I'm
                        </motion.span>
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="hero-name"
                        >
                            CHITRANSH<span className="highlight">.</span>
                        </motion.h1>
                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="hero-role gradient-text"
                        >
                            Full Stack Developer
                        </motion.h2>
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="hero-tagline"
                        >
                            Building scalable and user-friendly software solutions with modern technologies.
                            Specializing in React, Node.js, and immersive web experiences.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="hero-actions"
                        >
                            <a href="#projects" className="btn btn-primary">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="hero-socials"
                        >
                            <a href="https://github.com/chitransh529" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/chitransh-0c23" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:chitransh529@gmail.com" className="social-link">
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-image-container"
                    >
                        <div className="hero-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop"
                                alt="Cyberpunk Coder"
                                className="hero-image"
                            />
                            <div className="hero-glow-effect"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
