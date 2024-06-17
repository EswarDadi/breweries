import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Brewery from "./pages/Brewery";
import Login from "./pages/Login";
import Registration from "./pages/Registration";




function App() {
  return (
    <div >
      <Router>
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        </div>
        
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route exact path="/breweries/:id" element={<Brewery/>}/>
          <Route path="/registration" exact element={<Registration/>} />
          <Route path="/login" exact element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
