import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Intro from './Pages/Intro/intro';
import ProductTable from './Pages/productTable/productTable';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <ProductTable/>
    </div>
  );
}

export default App;
