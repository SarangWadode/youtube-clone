import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendations from './Recommendations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="app__container center">
              <Sidebar />
              <Recommendations />
            </div>
          } />

          <Route path='/search' element={
            <div className="app__container">
              <h1>Search ☕</h1>
            </div>
          } />

          <Route path='/signup' element={
            <div className="app__container">
              <h1>Sign Up ☕</h1>
            </div>
          } />
        </Routes>
        
      </Router>

      {/* <Header />
      <div className="center">
        <Sidebar />
        <Recommendations />
      </div> */}
    </div>
  );
}

export default App;
