import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Context from '../Context/Context';
import './App.css';
import AppRoutes from './AppRoutes';
import Modal from './modal/Modal';
import NavBar from './navBar/NavBar';

function App() {

  const[isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
  });

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <Context.Provider value={{isAuth, setIsAuth, setOpenModal}}>
      <BrowserRouter>
        <div className="App">
          <NavBar setOpenModal={setOpenModal} />
          <AppRoutes/>
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
  
}

export default App;
