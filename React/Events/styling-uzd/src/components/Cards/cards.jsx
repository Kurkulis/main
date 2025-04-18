import { Col, Card, Button } from 'react-bootstrap';
import './cards.css';

const Korta = ({ korta }) => {

    return (

        <Col md={4}>
            <Card className="mb-4 shadow-sm">
                <Card.Header className="text-center">{korta.pavadinimas}</Card.Header>
                <Card.Body className="text-center">
                    <h1 className="my-0">{korta.kaina} / mo</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        {korta.info.map((eilute, j) => (
                            <li key={j}>{eilute}</li>
                        ))}
                    </ul>
                    <Button variant={korta.mygtukoVariantas}>
                        {korta.mygtukoTekstas}
                    </Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Korta;
