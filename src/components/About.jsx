import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Award, BookOpen, Briefcase } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="section about-section" id="about">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2 variants={itemVariants} className="section-title">
                        About <span className="highlight">Me</span>
                    </motion.h2>

                    <div className="about-grid">
                        <motion.div variants={itemVariants} className="about-intro glass-card">
                            <Cpu className="card-icon" size={40} />
                            <h3>Profile Summary</h3>
                            <p>
                                Enthusiastic Software Engineering student with strong foundations in Web Development and full-stack application design.
                                Passionate about building scalable and user-friendly software solutions that create real-world impact.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="about-details">
                            <div className="detail-card glass-card">
                                <div className="card-header">
                                    <BookOpen className="card-icon-small" />
                                    <h3>Education</h3>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <span className="year">2023 - Present</span>
                                        <h4>Bachelor of Computer Science</h4>
                                        <p>KIET Group of Institutions, Ghaziabad</p>
                                        <span className="badge">CGPA: 7.8</span>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="year">Class XII</span>
                                        <h4>CBSE Board</h4>
                                        <span className="badge">94.6%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-card glass-card">
                                <div className="card-header">
                                    <Briefcase className="card-icon-small" />
                                    <h3>Experience</h3>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <span className="year">Oct 2024</span>
                                        <h4>Intern - Python Programming</h4>
                                        <p>Infosys Springboard</p>
                                        <p className="description">Built strong foundations in Python programming and problem-solving through hands-on modules.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-card glass-card full-width">
                                <div className="card-header">
                                    <Award className="card-icon-small" />
                                    <h3>Achievements</h3>
                                </div>
                                <ul className="achievement-list">
                                    <li>Gold Medalist - International Mathematics Olympiad (National Level)</li>
                                    <li>Participated in multiple hackathons, developing innovative software solutions.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
