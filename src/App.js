import './assets/css/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
