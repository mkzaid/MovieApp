
import './App.css';

import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import ResultPage from './pages/ResultPage';
import {DataContext} from './context/DataContext';
function App() {
  return (
    <>         
    <DataContext>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/search" element={<ResultPage/>} />
      </Routes>
    </Router>
    </DataContext>
    </>
  );
}

export default App;
