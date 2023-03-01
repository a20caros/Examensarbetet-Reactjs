import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';

const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
