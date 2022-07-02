
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import Pokemon from './components/pokeInfo/Pokemon'
import Header from './components/header/Header'




function App() {
  

  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
    
        <Route path='/pokedex' element={<PokedexScreen />} />
        <Route path='/pokemon/:id' element={<Pokemon/>}/>

    
      </Routes>
    
    </div>
  )
}

export default App
