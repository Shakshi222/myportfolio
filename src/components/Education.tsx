import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../assets/styles/Timeline.scss';

function EducationTimeline() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          {/* University Timeline (Left Side) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Kalinga Institute of Industrial Technology</h4>
            <p>
              Specialized in Cloud Computing, DevOps, and Software Development.
            </p>
          </VerticalTimelineElement>

          {/* School Timeline (Right Side) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderLeft: '7px solid white' }}  // Moves arrow to the left side
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap as IconProp} />}
            position="right" // Aligns the timeline on the right
          >
            <h3 className="vertical-timeline-element-title">Kendriya Vidyalaya</h3>
            <h4 className="vertical-timeline-element-subtitle">High School</h4>
            <p>
              Skills: Communication, Sports, and Computer Science.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default EducationTimeline;
