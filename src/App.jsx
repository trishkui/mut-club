
import './App.css'
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import Leadership from './pages/Leadership/leadership';
import Tracks from './pages/Tracks/tracks';
import Events from './pages/Events/Events';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 
  return (

  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/leadership' element={<Leadership />} />
    <Route path='/tracks' element={<Tracks />} />
    <Route path='/events' element={<Events />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
   
  )
}

export default App
