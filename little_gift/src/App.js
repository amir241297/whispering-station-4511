import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Product } from './Pages/product';
import { Carousel } from './Components/Carousel';
function App() {
  return (
    <div className="App">
      {/* <Carousel /> */}
      <Product />
    </div>
  );
}

export default App;
