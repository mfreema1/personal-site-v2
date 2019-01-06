import React from 'react';
import Heading from '../components/Heading';
import { Container, Row, Col } from 'reactstrap';
const resume = require('../misc/resume');
const contact = resume.contactInfo;
const education = resume.education;
const experience = resume.experience;
const skills = resume.skills;

const commaString = (lst) => {
    return lst.join(', ');
}

class Resume extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Heading text={"My Resume"}/>
                        <p>If you'd like to take a look at my formal qualifications, I'll throw you a link right <a href="../static/resume.pdf">here.</a></p>
                        <p>I'll also throw in a text version of it below if you're not one for formatting.</p>
                        <div className="resume-group">
                            <h3 className="bolded">Contact Info</h3>
                            <p>{contact.name}</p>
                            <p>{contact.phone}</p>
                            <p>{contact.email}</p>
                            <p><a href={'http://www.' + contact.github}>{contact.github}</a></p>
                            <p><a href={'http://www.' + contact.github}>{contact.linkedin}</a></p>
                        </div>
                        <div className="resume-group">
                            <h3 className="bolded">Education</h3>
                            <p><span className="bolded">{education.school}</span> - {education.location}</p>
                            <p>{education.degree} expected {education.graduationDate}</p>
                            <p className="bolded">GPA: {education.gpa}</p>
                            <p><span className="bolded">Honors: </span>{commaString(education.honors)}</p>
                            <p><span className="bolded">Activities: </span>{commaString(education.activities)}</p>
                        </div>
                        <div className="resume-group">
                            <h3 className="bolded">Experience</h3>
                            <ul className="no-margin-list no-bullet-list">
                            {experience.map((e) => (
                                <li className="bottom-space">
                                    <p><span className="bolded">{e.employer}</span> - {e.start} to {e.end}</p>
                                    <p>{e.location}</p>
                                    <ul className="no-margin-list">
                                        {e.tasks.map((t) => (
                                            <li>
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}    
                            </ul>
                        </div>
                        <div className="resume-group">
                            <h3 className="bolded">Skills</h3>
                            {Object.keys(skills).map((key) => (
                                <p><span className="bolded">{key}: </span>{skills[key].join(', ')}</p>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;