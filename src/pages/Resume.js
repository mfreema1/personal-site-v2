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
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        {contact.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {contact.phone}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {contact.email}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <a href={'http://www.' + contact.github}>{contact.github}</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <a href={'http://www.' + contact.github}>{contact.linkedin}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume-group">
                            <h3 className="bolded">Education</h3>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <span className="bolded">{education.school}</span>
                                    </div>
                                    <div className="col align-right">{education.location}</div>
                                </div>
                                <div className="row">
                                    <div className="col">{education.degree}</div>
                                    <div className="col align-right">{education.graduationDate}</div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span className="bolded">GPA: {education.gpa}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span className="bolded">Honors: </span>{commaString(education.honors)}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span className="bolded">Activities: </span>{commaString(education.activities)}
                                    </div>
                                </div>
                            </div>
                            <p></p>
                        </div>
                        <div className="resume-group">
                            <h3 className="bolded">Experience</h3>
                            <ul className="no-margin-list no-bullet-list">
                            {experience.map((e) => (
                                <li className="bottom-space container-fluid">
                                    <div className="row">
                                        <div className="col bolded">
                                            {e.employer}
                                        </div>
                                        <div className="col align-right">
                                            {e.location}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-10">
                                        <ul className="no-margin-list">
                                                {e.tasks.map((t) => (
                                                    <li>
                                                        {t}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col align-right">
                                            {e.start} - {e.end}
                                        </div>
                                    </div>
                                </li>
                            ))}    
                            </ul>
                        </div>
                        <div className="resume-group">
                            <h3 className="bolded">Skills</h3>
                            <div className="container-fluid">
                                {Object.keys(skills).map((key) => (
                                    <div className="row">
                                        <div className="col">
                                            <span className="bolded">{key}: </span>{skills[key].join(', ')}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;