import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return(
    <div>
        <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </div>
      </Router>
    </div>
    
    
  )
  
};

export default App;
