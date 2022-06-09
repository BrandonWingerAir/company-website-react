import GlobalStyle from './globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

import Footer from './components/Footer/Footer';

function App() {
  return <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/pricing' exact element={<Pricing/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
}

export default App;
