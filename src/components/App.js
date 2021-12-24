import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendations from './Recommendations';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="center">
        <Sidebar />
        <Recommendations />
      </div>
    </div>
  );
}

export default App;
