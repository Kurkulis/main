import { useState } from 'react'
import './App.css'
import Tekstas from './Tekstas'
import Pirkiniai from './Pirkiniai'
import Header from './Header'
import Paslaugos from './Paslaugos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Tekstas />
      <Pirkiniai />
      <Paslaugos />
    </>
  )
}

export default App
