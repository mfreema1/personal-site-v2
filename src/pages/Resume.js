import React from 'react';
import Heading from '../components/Heading';
import { Container, Row, Col } from 'reactstrap';
const resume = require('../misc/resume');
const contact = resume.contactInfo;
const education = resume.education;
const employment = resume.employment;
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
                            <p><a href={'http://www.' + contact.github}>{contact.github}</a></p>
                            <p><a href={'http://www.' + contact.github}>{contact.linkedin}</a></p>
                        </div>
                        <div className="resume-group">
                            <h3 className="bolded">Education</h3>
                            <p>{education.school} - {education.location}</p>
                            <p>{education.degree} expected {education.graduationDate}</p>
                            <p className="bolded">GPA: {education.gpa}</p>
                            <p><span className="bolded">Honors: </span>{commaString(education.honors)}</p>
                            <p><span className="bolded">Activities: </span>{commaString(education.activities)}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;