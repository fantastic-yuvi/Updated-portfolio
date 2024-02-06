import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Home} from './components/home';
import {Navbar} from './components/navbar';
import { About } from './components/about';
import { Cards } from './components/cards';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <About/>
          <Cards/>
          <Projects/>
          <Contact/>
      </Router>
    </div>
  );
}

export default App;
