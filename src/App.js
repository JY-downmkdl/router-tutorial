import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import View from './components/View';
import Products from './components/Product';
import Header from './components/Header';
import Subpages from './components/Subpages';
import Subpage from './components/Subpage';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:productname' element={<Products/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/subpages' element={<Subpages/>}>
            <Route path=':id' element={<Subpage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
