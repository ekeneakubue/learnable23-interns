import {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDesign from './pages/ProductDesign';
import Sidebar from './components/Sidebar';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Web3 from './pages/Web3';
import Mentors from './pages/Mentors';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header OpenSidebar = {OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar = {OpenSidebar}/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="product" element={ <ProductDesign /> } />
            <Route path="frontend" element={ <Frontend /> } />
            <Route path="backend" element={ <Backend /> } />
            <Route path="web3" element={ <Web3 /> } />
            <Route path="mentors" element={ <Mentors /> } />
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
