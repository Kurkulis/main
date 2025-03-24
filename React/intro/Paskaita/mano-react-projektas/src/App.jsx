import { useState } from 'react'
import './App.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import MainContent from '@components/MainContent'
import ItemList from './components/ItemList'
import Skaitiklis from './components/Skaitiklis'
import Card from './components/Card'
import VartotojoProfilis from './components/VartotojoProfilis'
import ProduktoKortele from './components/ProduktoKortele'

function App() {

  return (
    <div className="app">
      <Header />
      <MainContent />
      <ItemList />
      <Card title="betkoks string" />

      <h1>React Praktika</h1>
      <Skaitiklis pradinisSkaicius={0} />
      <Footer />



      <VartotojoProfilis vardas="jonas" amzius="13" spalva="ruda" />
      <ProduktoKortele pavadinimas="daiktas" kaina="100" aprasymas="viskas ciki"/>
    </div>
  )
}

export default App
