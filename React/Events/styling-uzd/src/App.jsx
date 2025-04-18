import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/header'
import Main from './components/Main/Main';
import Korta from './components/Cards/cards';
import Footer from './components/Footer/footer';
import { Container, Row, } from 'react-bootstrap';

function App() {

  const kortos = [
    {
      pavadinimas: 'Free',
      kaina: '$0',
      info: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      mygtukoTekstas: 'Sign up for free',
      mygtukoVariantas: 'outline-primary'
    },
    {
      pavadinimas: 'Pro',
      kaina: '$15',
      info: ['20 users included', '10 GB of storage', 'Priority email support', 'Help center access'],
      mygtukoTekstas: 'Get started',
      mygtukoVariantas: 'primary'
    },
    {
      pavadinimas: 'Enterprise',
      kaina: '$29',
      info: ['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access'],
      mygtukoTekstas: 'Contact us',
      mygtukoVariantas: 'primary'
    }
  ];

  return (
    <>
      <Header />
      <Main />
      <Container className="py-5">
        <Row>
          {kortos.map((k, i) => (
            <Korta key={i} korta={k} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
