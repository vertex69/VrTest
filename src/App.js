import './App.css';
import NavBar from './components/NavBar'
import Home from './views/home'
import Artsncrafts from './views/artsncrafts'
import Digitalingenuity from './views/digitalingenuity'
import Explore from './views/explore'
import Highlightedgems from './views/explore'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/highlightedgems" component={Highlightedgems}/>
          <Route path="/artsncrafts" component={Artsncrafts}/>
          <Route path="/digitalingenuity" component={Digitalingenuity}/>
        </Switch> 
      </div>
    </Router>

  );
}

export default App;
