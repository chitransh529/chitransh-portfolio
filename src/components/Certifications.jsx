import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import '../styles/Certifications.css';

const certifications = [
    {
        title: "SQL (Basic)",
        issuer: "HackerRank",
        description: "Learnings: SQL basics, data retrieval, filtering, aggregation, and simple queries.",
        link: "#",
        date: "2024"
    },
    {
        title: "Database Programming with SQL",
        issuer: "Oracle Academy",
        description: "Learnings: Advanced SQL, database design, joins, subqueries, and data manipulation.",
        link: "#",
        date: "2024"
    },
    {
        title: "Cybersecurity Foundation",
        issuer: "Palo Alto Networks",
        description: "Learnings: Fundamentals of cybersecurity, network security, threat detection, and risk mitigation.",
        link: "#",
        date: "2024"
    },
    {
        title: "Introduction to MongoDB",
        issuer: "MongoDB",
        description: "Learnings: NoSQL databases, document-based data modeling, CRUD operations, and MongoDB basics.",
        link: "#",
        date: "2024"
    }
];

const Certifications = () => {
    return (
        <section className="section certifications-section" id="certifications">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    My <span className="highlight">Certifications</span>
                </motion.h2>

                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="cert-card glass-card"
                        >
                            <div className="cert-icon-wrapper">
                                <Award size={32} className="cert-icon" />
                            </div>

                            <div className="cert-content">
                                <div className="cert-header">
                                    <h3>{cert.title}</h3>
                                    <span className="cert-date">{cert.date}</span>
                                </div>

                                <h4 className="cert-issuer">{cert.issuer}</h4>
                                <p className="cert-description">{cert.description}</p>

                                <a href={cert.link} className="cert-link">
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
