import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
import Favourites from './Pages/Favourites/Favourites'

function App() {

  return (
    <>
      <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/recipe-item/:id' element={<Details />} />
    </Routes>

    </>
  )
}

export default App
