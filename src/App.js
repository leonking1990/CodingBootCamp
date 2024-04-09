import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home2 from './components/Home2';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home2 />}/>
          <Route path='/create' element={<Add />}/>
          <Route path='/edit' element={<Edit />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
