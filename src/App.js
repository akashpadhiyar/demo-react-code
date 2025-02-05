import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import AddData from './AddData';
import Display from './Display';
import Edit from './Edit';
function App() {
  return (<>
  <h3>App</h3>
  <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/Add' element={<AddData/>}/>
      <Route path='/Display' element={<Display/>}/>
      <Route path='/edit/:id/' element={<Edit/>}/>
      
    </Routes>
  </Router>
  </>  );
}
export default App;