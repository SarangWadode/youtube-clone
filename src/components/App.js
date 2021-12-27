import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendations from './Recommendations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './Search';

function App() {
  return (
    <div className="app ">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="app__container center">
              <Sidebar />
              <Recommendations />
            </div>
          } />

          <Route path='/search/:searchTerm' element={
            <div className="app__container center">
              <Sidebar />
              <Search />
            </div>
          } />

        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
