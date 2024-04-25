
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Main from './Components/Home/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index';
import ProductDetails from './Components/Product/ProductDetails';

function App() {
 

  return (
    <>  
    <div className='AppClass'>
        <Router>
          <Routes>
          <Route path='' element={<Index/>}>
            <Route path='' element={<Main/>}/>
            <Route path='product-details' element={<ProductDetails/>}/>
          </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
