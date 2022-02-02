import './App.css';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Nav />
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      </Switch >
        </Router>
     <Footer />
    </div>
    
  )
}

export default App;
