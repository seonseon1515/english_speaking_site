import React from 'react';
import '../css/App.css'
import NativePage from './NativePage';
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
          <Route path='/' element={<MainPage />} />
          <Route path='/native' element={<NativePage />}/>
          <Route path="/speaking" element={<Page2 />} />
          <Route path="/study" element={<Page3 />} />
          <Route path="/QnA" element={<Page4 />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
