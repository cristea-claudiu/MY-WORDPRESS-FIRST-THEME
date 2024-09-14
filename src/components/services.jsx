"use client"
import React from 'react'
import styles from "@/styles/general.module.css";
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import image from "@/img/facebook.png"
import image1 from "@/img/gmail.png"
import image2 from "@/img/instagram.png"
import image3 from "@/img/linkedin.png"
import image4 from "@/img/logo-x-black.png"
import image5 from "@/img/whatsapp.png"


const Services = () => {
    return (
        <div className='mt-4 bg-secondary bg-opacity-10  d-block text-center justify-content-center'>
            <h2 className='  col-12'>Our Services</h2>
            <h2 className=' col-12'>*</h2>
            <p className={`text-secondary ${styles.pTag}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            <Row>
                <Col xs={12} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={image.src} className={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={image1.src} className={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={image2.src} className={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={image3.src} className={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={image4.src} className={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={image5.src} className={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>



        </div>
    )
}

export default Services