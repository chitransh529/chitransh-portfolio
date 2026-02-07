import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import '../styles/Projects.css';

const projects = [
    {
        title: "Samadhan",
        category: "Full Stack Website",
        subtitle: "Unified Grievance & Utility Tracker",
        description: "Developed a centralized platform for registering and tracking public grievances. Implemented role-based access and real-time status updates to facilitate transparency and efficiency.",
        tags: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Dashboard/Analytics image
        links: {
            github: "https://github.com/chitransh529",
            demo: "#"
        }
    },
    {
        title: "Emovia",
        category: "Mental Health Website",
        subtitle: "Mental Health Therapy Platform",
        description: "Designed a comprehensive mental health support website with mood tracking and guided therapy resources. Focused on creating a calming, accessible, and user-centric web experience.",
        tags: ["React.js", "JavaScript", "CSS3", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2090&auto=format&fit=crop", // Calm/Health image
        links: {
            github: "https://github.com/chitransh529",
            demo: "#"
        }
    }
];

const Projects = () => {
    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured <span className="highlight">Projects</span>
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="project-card glass-card"
                        >
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-category-badge">{project.category}</div>
                                <div className="placeholder-overlay"></div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <div className="folder-icon">
                                        <Folder size={32} />
                                    </div>
                                    <div className="project-links">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="View Source">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.demo} title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <h4 className="project-subtitle">{project.subtitle}</h4>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
