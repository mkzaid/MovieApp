
import './App.css';

import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>         
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/search" element={<ResultPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
