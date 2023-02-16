import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    //BEM NAMING CONVENTION (names of components are lowercase)
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
