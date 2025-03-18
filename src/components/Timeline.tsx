import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date=" April 2024 - May 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">The coding juniors</h4>
            <p>
              Frontent Web Development,  Project Management, SDLC
            </p>
          </VerticalTimelineElement>
          </VerticalTimeline>
      </div>
    </div>
    
  );
}

export default Timeline;