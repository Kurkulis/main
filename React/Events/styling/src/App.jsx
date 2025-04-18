
import './App.css'
import InlineStylingJSObjects from './components/CSS/plain/inline-styling/inline-objects';
import InlineStylingPlain from './components/CSS/plain/inline-styling/inline-styling';
import Plain from './components/CSS/plain/plain';

function App() {

  return (
    <>
      <Plain />
      <hr />
      <InlineStylingPlain />
      <hr />
      <InlineStylingJSObjects />
    </>
  )
}

export default App
