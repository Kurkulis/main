import './App.css'
import EinaPrieLentos from './Komp/EinaPieLentos'
import GeriausiasMedis from './Komp/GeriausiasMedis'
import Laimejimas from './Komp/Laimejimas'
import Sansas from './Komp/Sansas'
import Skaiciai from './Komp/Skaiciai'
import Tikrinimai from './Komp/Tikrinimai'

function App() {


  return (
    <>
      <Laimejimas />
      <hr></hr>
      <Sansas />
      <hr></hr>
      <Tikrinimai />
      <hr></hr>
      <GeriausiasMedis />
      <hr></hr>
      <Skaiciai />
      <hr></hr>
      <EinaPrieLentos />

    </>
  )
}

export default App
