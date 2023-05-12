import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Profile from './pages/profile';
import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
  <div>
    <Navbar />
    
    <main>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/shop" element ={<Shop />} />
        <Route path="/cart" element ={<Cart />} />
        <Route path="/about" element ={<About />} />
        <Route path="/profile" element ={<Profile />} />

      </Routes>
    </main>
    <Footer />
  </div>
  );
}

export default App;
