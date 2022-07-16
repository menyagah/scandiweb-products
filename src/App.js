import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<ListProduct />} />
            <Route path="/addproduct" element={<CreateProduct />} />
          </Routes>
        </div>
      </Router>

      <footer className='footer'>
        <h4>scandiweb Test</h4>
      </footer>
    </div>
  );
}

export default App;