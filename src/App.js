import GlobalStyle from './globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar/Navbar';

function App() {
  return <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/pricing' exact element={<Pricing/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
