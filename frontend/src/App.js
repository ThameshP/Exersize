import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar>

        </Navbar>
        <div className ="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
              />
            <Route
              path="/signup"
              element={<SignUp/>}
              />
              <Route
              path="/login"
              element={<LogIn/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
