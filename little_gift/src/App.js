import './App.css';
import { Product } from './Pages/Product';
import {Login} from './Pages/Login'
import {Signup} from './Pages/Signup'
import {BoyFashion} from './Pages/BoyFashion'
import {GirlFashion} from './Pages/GirlFashion'

function App() {
  return (
    <div className="App">
      <Product />
      <Signup />
      <Login />
      <BoyFashion />
      <GirlFashion />
    </div>
  );
}

export default App;
