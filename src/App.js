import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div className="App">
      
  <Router>
    <div>
      <Route exact path="/" component={ListProduct} />
      <Route path="/addproduct" component={CreateProduct} />
      
    </div>
  </Router>
    </div>
  );
}

export default App;