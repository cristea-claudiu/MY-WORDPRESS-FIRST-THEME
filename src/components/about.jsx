import React from 'react'
import styles from "@/styles/general.module.css";
import { Col, ProgressBar, Row } from 'react-bootstrap'
const skills = [
    { name: 'HTML', percentage: 99 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 70 },
    { name: 'Java', percentage: 100 },
];
const About = () => {
    return (
        <div className='mt-4 bg-secondary bg-opacity-10 bg-white d-block text-center justify-content-center'>
            <h2 className='  col-12'>About Me</h2>
            <h2 className=' col-12'>*</h2>
            <p className={`text-secondary ${styles.pTag}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <h3 className=' mt-5'>Hello! I&apos;M Jhon Doe.</h3>
            <p className='text-secondary'>Developer * Web Designer * Gardener</p>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum nemo doloribus ex voluptate animi ipsum, deleniti ducimus iste tenetur dolore. Illo officiis aliquam dolorum quasi error commodi deserunt animi nulla cum nobis saepe molestias beatae possimus nam, voluptatibus perspiciatis ad quibusdam non alias eveniet nisi totam ea! Ad, mollitia.</p>

            <div className="mt-5">
                <h3>Skills</h3>
                <Row>
                    {skills.map((skill, index) => (
                        <Col xs={12} lg={6} key={index} className="my-3">
                            <Row>
                                <Col xs={4} className="text-left">
                                    {skill.name}
                                </Col>
                                <Col xs={8}>
                                    <ProgressBar animated now={skill.percentage} label={`${skill.percentage}%`} className={`${styles.progress} ${styles.progressBar} ${styles.customProgressBar}`} />
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </div>


        </div>
    )
}

export default About