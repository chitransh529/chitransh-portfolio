import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, GitBranch, Terminal } from 'lucide-react';
import '../styles/Skills.css';

const skillsData = [
    {
        category: "Languages",
        icon: <Code size={30} />,
        color: "#00f3ff",
        items: [
            { name: "Java", url: "https://cdn.simpleicons.org/openjdk/00f3ff" },
            { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/00f3ff" },
            { name: "SQL", url: "https://cdn.simpleicons.org/mysql/00f3ff" },
            { name: "HTML5", url: "https://cdn.simpleicons.org/html5/00f3ff" },
            { name: "CSS3", url: "https://cdn.simpleicons.org/css3/00f3ff" },
            { name: "Python", url: "https://cdn.simpleicons.org/python/00f3ff" }
        ]
    },
    {
        category: "Frontend",
        icon: <Layout size={30} />,
        color: "#bc13fe",
        items: [
            { name: "React.js", url: "https://cdn.simpleicons.org/react/bc13fe" },
            { name: "Framer Motion", url: "https://cdn.simpleicons.org/framer/bc13fe" },
            { name: "Vite", url: "https://cdn.simpleicons.org/vite/bc13fe" }
        ]
    },
    {
        category: "Backend",
        icon: <Server size={30} />,
        color: "#2d5af5",
        items: [
            { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/2d5af5" },
            { name: "Express.js", url: "https://cdn.simpleicons.org/express/2d5af5" },
            { name: "Postman", url: "https://cdn.simpleicons.org/postman/2d5af5" }
        ]
    },
    {
        category: "Database",
        icon: <Database size={30} />,
        color: "#00ff9d",
        items: [
            { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/00ff9d" },
            { name: "MySQL", url: "https://cdn.simpleicons.org/mysql/00ff9d" }
        ]
    },
    {
        category: "Tools",
        icon: <Terminal size={30} />,
        color: "#ff0055",
        items: [
            { name: "Git", url: "https://cdn.simpleicons.org/git/ff0055" },
            { name: "GitHub", url: "https://cdn.simpleicons.org/github/ff0055" },
            { name: "VS Code", url: "https://cdn.simpleicons.org/visualstudiocode/ff0055" }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Skills = () => {
    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Technical <span className="highlight">Skills</span>
                </motion.h2>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="skill-card glass-card"
                            style={{ '--card-color': skill.color }}
                            whileHover={{
                                y: -10,
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="skill-header">
                                <div className="skill-icon" style={{ color: skill.color, boxShadow: `0 0 15px ${skill.color}40`, borderColor: `${skill.color}40` }}>
                                    {skill.icon}
                                </div>
                                <h3>{skill.category}</h3>
                            </div>
                            <div className="skill-list-grid">
                                {skill.items.map((item, i) => (
                                    <div key={i} className="skill-item">
                                        <img src={item.url} alt={item.name} className="skill-item-icon" />
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
