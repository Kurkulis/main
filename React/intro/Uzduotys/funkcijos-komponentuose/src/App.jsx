import './App.css'
import Darbuotojas from './Components/Darbuotojas.Jsx'
import PrekiuKrepselis from './Components/PrekiuKrepselis.JSX'
import Skaicius from './Components/skaicius'
import TrysSkaiciai from './Components/TrysSkaiciai'
import ZodzioIlgis from './Components/ZodzioIlgis'

function App() {


  return (
    <>
      <ZodzioIlgis />
      <hr />
      <Skaicius />
      <hr />
      <TrysSkaiciai />
      <hr />
      <Darbuotojas />
      <hr />
      <PrekiuKrepselis />
    </>
  )
}

export default App
