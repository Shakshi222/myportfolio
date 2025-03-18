import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faReact, faDocker, faFigma } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "PostgreSQL",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Linux",
    "Jenkins",
];

const labelsThird = [
    "Data Structructure",
    "Algorithms",
    "Problem Solving",
    "Communication",
    "Team Management",
    "C++",
    "Java",
    "OOP",
    "figma",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact as IconProp} size="3x"/>
                    <h3> Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and JavaScript. I have a strong proficiency in the SDLC process and frontend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker as IconProp} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live with cloud deployment practice.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFigma as IconProp} size="3x"/>
                    <h3>Others</h3>
                    <p>Stay relevant by upgrading and understanding the basic needs and skiils . I have professional experience building enterprise grade UI/UX design to empower easy development intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;