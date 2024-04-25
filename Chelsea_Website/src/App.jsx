
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Main from './Components/Home/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index';
import ProductDetails from './Components/Product/ProductDetails';
import Terms from './Components/Terms/Terms';
import Privacy from './Components/Privacy/Privacy';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
 

  return (
    <>  
    <div className='AppClass'>
        <Router>
          <Routes>
          <Route path='' element={<Index/>}>
            <Route path='' element={<Main/>}/>
            <Route path='product-details' element={<ProductDetails/>}/>
            <Route path='contact-us' element={<Contact/>}/>
            <Route path='about-us' element={<About/>}/>
            <Route path='terms-and-conditions' element={<Terms/>}/>
            <Route path='privacy-policy' element={<Privacy/>}/>
          </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
