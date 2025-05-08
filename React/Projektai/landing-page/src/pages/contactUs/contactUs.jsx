import { Col, Container, Row } from "react-bootstrap";
import './contactUs.scss';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';


const ContactUs = ({ title, form, subtitle, info, socials }) => {
    return (
        <section className="contact-section" id="contact">
            <Container>
                <Row>
                    <Col md={8}>
                        <h1>{title}</h1>
                        <div className="section-underline mb-5"></div>
                        <p>{subtitle}</p>

                        <Form>
                            {form.fields.map((field, index) => (
                                <Form.Group
                                    className={`mb-3 form-group ${index < 2 ? 'half' : ''}`}
                                    controlId={`formField-${index}`}
                                    key={index}
                                >
                                    <Form.Control
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        as={field.type === 'textarea' ? 'textarea' : 'input'}
                                        rows={field.type === 'textarea' ? 3 : undefined}
                                    />
                                </Form.Group>

                            ))}
                            <Button type="submit">{form.buttonText}</Button>
                        </Form>

                    </Col>
                    <Col md={4} className="contact-info">
                        <h2>Contact Info</h2>
                        <div className="info-item">
                            <FaMapMarkerAlt />
                            <div className="info-text">
                                <h4>{info.address.label}</h4>
                                <p>{info.address.text}</p>
                            </div>
                        </div>


                        <div className="info-item">
                            <FaPhone />
                            <div className="info-text">
                                <h4>{info.phone.label}</h4>
                                <p>{info.phone.text}</p>
                            </div>
                        </div>


                        <div className="info-item">
                            <FaEnvelope />
                            <div className="info-text">
                                <h4>{info.email.label}</h4>
                                <p>{info.email.text}</p>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row className="social-row justify-content-center mt-5">
                    {socials.map((social, index) => {
                        const IconComponent = FaIcons[social.icon];
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                {IconComponent && <IconComponent />}
                            </a>
                        );
                    })}
                </Row>

            </Container>
        </section>
    );
};

export default ContactUs;