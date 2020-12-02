import Login from './component/login'
import './App.css';
import './style.css'
import Saved from './component/saved'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './component/Container';
import Main  from './component/main'
import Signup from './component/Signup'

function App() {
  
  return (
    <Router>
    <Container />
    <div className="App">
    
    
    
    <Switch>

     <Route exact path='/' component={Main} ></Route>
     <Route exact path='/Login' component={Login}></Route>
     <Route exact path='/Signup' component={Signup}></Route>
    <Route exact path='/Saved' component={Saved}></Route>
    </Switch>

    
     
    </div>
     </Router>
    
  );
}


export default App
