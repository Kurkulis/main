import './App.css'
import CounterTev from './Components/Counter/CounterTev'
import ImoneBendras from './Components/Imone/ImoneBendras'
import KnyguBendras from './Components/Knygos/KnyguBendras'
import ZodziuBendras from './Components/Zodziai/ZodziuBendras'

function App() {

  return (
    <>
      <CounterTev />
      <hr />
      <ZodziuBendras />
      <hr />
      <KnyguBendras />
      <hr />
      <ImoneBendras />
    </>
  )
}

export default App
