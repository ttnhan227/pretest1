import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DataList from './listProduct';
import DataAdd from './addProduct';
function App() {

  return (
    <div className="App">

      <nav>
        <Link to="/">Home</Link>
        <Link to="/data">Product List</Link>
        <Link to="/add">Add New Product</Link>
        <Link to="/about">About us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<DataList />} />
        <Route path="/add" element={<DataAdd />} />
      </Routes>

      
    </div>
  );
}

export default App;
