import React, {useContext} from "react";
import "./education.css";
import timelineData from './timelineData';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import{ReactComponent as WorkIcon} from '../../img/briefcase-solid.svg';
import {ReactComponent as SchoolIcon} from '../../img/school-solid.svg';
import { ThemeContext } from "../../context";

const Education = () => {
    const theme = useContext(ThemeContext);

    let workIconStyles = {
        background:"#59B256"
    };
    let schoolIconStyles = {
        background:"#44AADC"
    }
    let workContent = {
        background: '#59B256', color: 'rgba(245, 245, 245, 0.9)',borderTop:"4px solid #9dbde4 "
    };
    let schoolContent = {
        background: '#44AADC', color: 'rgba(245, 245, 245, 0.9)',borderTop:"4px solid #9dbde4 "
    };
    return (
        <div className="e">
            <h2 className="e-title">Experience & Education</h2>
            
            <VerticalTimeline>
                {timelineData.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName={theme.state.darkMode ? "date-1" : "date-2"}
                            iconStyle={isWorkIcon? workIconStyles:schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon/>: <SchoolIcon />}
                            contentStyle={isWorkIcon ? workContent : schoolContent}
                            contentArrowStyle={{ borderRight: '7px solid #344253' }}
                            
                        >
                        <h3 className="vertical-timeline-element-title">{element.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location} 
                        </h5>
                        <p className="description">{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })
                }
            </VerticalTimeline>
            
        </div>
    );
};

export default Education;
