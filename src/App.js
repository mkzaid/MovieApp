
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import ResultPage from './pages/ResultPage';
import {DataContext} from './context/DataContext';
import MoviePage from './pages/MoviePage';
import ErroPage from './pages/ErroPage';

function App() {

  
  return (
    <>         
    <DataContext>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<ResultPage />} />
        <Route exact path="/movie/:movieId" element={<MoviePage/>} />
        <Route exact path="/genre/:genreType" element={<ResultPage/>} />
        <Route exact path="/404" element={<ErroPage/>} />
      </Routes>
    </Router>
    </DataContext>
    </>
  );
}

export default App;
