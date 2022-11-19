import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcom from './Components/Navbarcom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarcom />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
