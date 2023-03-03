import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import ParfymeSite from './Elements/ParfymeSite';
import Footer from './Elements/Footer';

const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/ParfymeSite' element={<ParfymeSite/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;
