import Login from "./components/auth/Login";
import Home from './components/auth/Home';
import Signup from './components/auth/Signup';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home/>}></Route>
          <Route path='/Login' element={< Login/>}></Route>
          <Route path='/Signup' element={< Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;