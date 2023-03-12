
import './App.css';
import Navbar from "./components/Navbar"
import Home1 from './components/Home1';
import SignUp from './components/SignUp';
import Card from './components/Card';
import ProductCard from './components/ProductCard';
import SignIn from './components/SignIn';
import Setting from './components/Setting';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home1/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/productcard" element={<ProductCard/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/setting" element={<Setting/>}/>
    
      </Routes>
      </BrowserRouter>

      
    
  )
}

export default App