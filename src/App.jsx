
import './App.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import Leadership from './pages/leadership/leadership';
import Tracks from './pages/tracks/Tracks';
import Events from './pages/events/events';
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
