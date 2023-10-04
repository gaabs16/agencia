import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/header';
import Home from './componentes/home';
import Rodape from './componentes/rodape';
import GrandCanyon from './componentes/GrandCanyon';
import Escocia from './componentes/Escocia';
import Muralhas from './componentes/Muralhas';
import Aruba from './componentes/Aruba';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/GrandCanyon' element={<GrandCanyon />} />
            <Route path='/Escocia' element={<Escocia />} />
            <Route path='/Muralhas' element={<Muralhas />} />
            <Route path='/Aruba' element={<Aruba />} />
          </Routes>
        <Rodape />
      </Router>
    </div>
  );
}

export default App;