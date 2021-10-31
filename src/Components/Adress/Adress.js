import React from 'react';
import './Adress.css';
import { Col, Container, Row } from 'react-bootstrap';

const Adress = () => {
    return (
        <div className="div-margin py-5">
            <Container>
                <p className="fs-6 fw-bold text-secondary">LET’S FIND US IN</p>
                <div className="d-flex">
                    <h2  style={{color: "#FFDE59"}} className="fs-1 titl-design">Canada, </h2>
                    <h2 className="fs-1 titl-design"> United States, </h2>
                    <h2 className="fs-1 titl-design"> United Kingdom</h2>
                </div>
                <Row>
                    <Col className="my-2 ">
                            <h5 className="mt-4 fs-3">Adress Details</h5>
                            <div className="mt-3">
                                <p  className="d-block">95 Black River Suite 833,<br/> Toronto, Canada</p>
                            </div>
                    </Col>
                    <Col className="my-2 ">
                            <h5 className="mt-4 fs-3">Email us</h5>
                            <div className="mt-3">
                                <p  className="d-block">helps@old-care.com <br /> admins@old-care.com</p>
                            </div>
                    </Col>
                    <Col className="my-2">
                            <h5 className="mt-4 fs-3">Phone Number</h5>
                            <div className="mt-3">
                                <p  className="d-block">458-990-4476 <br /> 458-681-1745</p>
                            </div>
                    </Col>
                    <Col className="my-2">
                            <h5 className="mt-4 fs-3">Follow Us On</h5>
                            <div className="d-flex my-3">
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i style={{color: "#FFDE59"}} className="fab fa-facebook-square mx-2 fs-3 "></i>
                                </a>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i style={{color: "#FFDE59"}} className="fab fa-twitter-square mx-2 fs-3 "></i>
                                </a>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i style={{color: "#FFDE59"}} className="fab fa-instagram mx-2 fs-3 "></i>
                                </a>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i style={{color: "#FFDE59"}} className="fab fa-google-plus-square mx-2 fs-3 "></i>
                                </a>
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Adress;