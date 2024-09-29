
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'; 
import Home from './pages/home/home';
import Leadership from './pages/leadership/leadership';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 
  return (

  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/leadership' element={<Leadership />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
   
  )
}

export default App
