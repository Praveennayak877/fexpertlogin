import Login from "./component/login";
import "./App.css";


import Saved from "./component/saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./component/Container";
import Main from "./component/main";
import Signup from "./component/Signup";
import Header from "./component/Header";
import SearchResult from "./component/SearchResult";
import ExpertProfile from "./component/ExpertProfile";

function App() {
  return (
    <Router>
      <Container />
      
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header}></Route>
          <Route exact path="/ExpertProfile" component={ExpertProfile}></Route>
          <Route exact path="/Searchresult" component={SearchResult}></Route>
          <Route exact path="/Main" component={Main}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/Saved" component={Saved}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
