
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product';
import Sales from './components/Sales';
import Salestable from './components/Salestable';
import Bill from './components/Bill';

function App() {
  return (
    <div className="App">

      <>
      

      <BrowserRouter>
        
        
          <Routes>
            <Route path='/' element= {<Login/>}/>
            
            <Route path='/home' element= {<Home/>}/>

            <Route path='/product' element= {<Product/>}/>

            <Route path='/sales' element= {<Sales/>}/>

            <Route path='/salestable' element= {<Salestable/>}/>

            <Route path='/salestable' element= {<Salestable/>}/>

            <Route path='/bill' element={<Bill/>}/>

            <Route path='/bill/:id' element={<Bill/>}/>
          </Routes>
      
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
