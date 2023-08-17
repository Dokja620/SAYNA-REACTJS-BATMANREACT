import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css';

import Navbar from './libs/nav';
import Footer from './libs/foot';

import Home from './pages/Home';
import Game from './pages/Game';
import Eshop from './pages/E-shop';
import Account from './pages/Account';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='game' element={<Game/>}/>
            <Route path='e-shop' element={<Eshop/>}/>
            <Route path='account' element={<Account/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
