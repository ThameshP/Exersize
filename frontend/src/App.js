import './App.css';
import Header from './Navbar'
import Home from './Home';

function App() {
  return (
    //BEM NAMING CONVENTION (names of components are lowercase)
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
