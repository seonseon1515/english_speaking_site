import React from 'react';
import '../css/App.css'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import MainPage from './MainPage';
import Header from '../components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/tutor" element={<Page1 />} />
          <Route path="/speaking" element={<Page2 />} />
          <Route path="/study" element={<Page3 />} />
          <Route path="/QnA" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
