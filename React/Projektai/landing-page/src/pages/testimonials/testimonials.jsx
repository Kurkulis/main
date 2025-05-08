import { Container } from "react-bootstrap";
import './testimonials.scss';


const Testimonials = ({ title, items }) => {
    return (
        <section className="testimonials-section" id="testimonials">
            <Container>
                <h1>{title}</h1>
                <div className="section-underline mb-5"></div>

                <div className="grid-container">
                    {items.map((item, i) => (
                        <div className="testimonial-item" key={i}>
                            <img src={`/testimonials/${item.image}`} alt={item.author} />
                            <div className="testimonial-text">
                                <p>""{item.text}""</p>
                                <h3>- {item.author}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default Testimonials;