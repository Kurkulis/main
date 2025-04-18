import './App.css'
import Kelione from './Components/Kelione'
import RefPavyzdys from './Components/refPvz'
import Skaiciokas from './Components/Skaicius'
import MedzioApdirbejas from './Components/medzioApdirbejas';
import Temperaturos from './Components/Temperaturos';
import Kepyklele from './Components/Kepyklele';

function App() {


  return (
    <>
      <RefPavyzdys />
      <hr />
      <Skaiciokas />
      <hr />
      <Kelione />
      <hr />
      <MedzioApdirbejas />
      <hr />
      <Temperaturos />
      <hr />
      <Kepyklele />
    </>
  )
}

export default App
