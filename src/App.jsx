import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/login';
import LandingPage from './component/LandingPage';
import Privacy from './component/Privacy';
import Terms from './component/Terms';
import ContactUs from './component/ContactUs';
import Categories from './component/Categories';
import About from './component/About';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
