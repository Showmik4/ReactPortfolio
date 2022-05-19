
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/Home';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Education from  './components/Education';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';



import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Interest from './components/Interest';



function App() {
  return (
    <div className="App">
       
     
     <Router>
      <>
      <Route exact path="/" component={Home}  />
      
    <Switch>

    <Route  path="/skill" component={Aboutme}  />
    <Route  path="/skill" component={Skill}  />

    <Route  path="/experience" component={Experience}  />

    <Route  path="/education" component={Education}  />
    <Route  path="/projects" component={Projects}  />

<Route  path="/projects" component={Interest}  />
    </Switch>
      
      
      </>

     </Router>

    </div>
  );
}

export default App;
