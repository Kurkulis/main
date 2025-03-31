import './App.css'
import Pardavejas from './AutoPardavejas/Pardavejas'
import Imone from './Bonusai/Imone'
import HobiuParduotuve from './Deliones/HobiuParduotuve'
import Mokymai from './MokymuInfo/Mokymai'
import Pasaulis from './PasaulioInfo/Pasaulis.JSX'
import Kategorija from './Portalas/Kategorija'
import VisosRoles from './Roles/VisosRoles'
import Studentas from './StudentoInfo/Studentas'

function App() {

  return (
    <>
      <Pasaulis />
      <hr></hr>
      <VisosRoles />
      <hr></hr>
      <Imone />
      <hr></hr>
      <Pardavejas />
      <hr></hr>
      <HobiuParduotuve />
      <hr></hr>
      <Studentas />
      <hr></hr>
      <Kategorija />
      <hr></hr>
      <Mokymai />
    </>
  )
}

export default App
