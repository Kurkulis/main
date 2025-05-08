import { Col, Container, Row } from "react-bootstrap";
import './team.scss';


const Team = ({ title, members, subtitle }) => {
    return (
        <section className="team-section" id="team">
            <Container>
                <h1>{title}</h1>
                <div className="section-underline mb-5"></div>
                <p>{subtitle}</p>

                <Row>

                    {members.map((member, i) => (
                        <Col md={3} sm={6} xs={12} key={i}>
                            <div className="team-item">
                                <img src={`/team/${member.image}`} />
                                <h4>{member.name}</h4>
                                <h3>{member.position}</h3>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    );
};

export default Team;