import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Product } from './Pages/Product';
import {SignupCard} from './Pages/Signup';
import {Login} from './Pages/Login';
import {BoyFashion} from './Pages/BoyFashion'
import {GirlFashion} from './Pages/GirlFashion'
import {Sidebar} from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Product />
      {/* <SignupCard /> */}
      {/* <Login /> */}
      {/* <GirlFashion /> */}
      {/* <BoyFashion /> */}
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
