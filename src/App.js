import "./App.css";
import Header from "./Components/Header";
import { CssBaseline } from "@material-ui/core";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Switch>
          <Route path="/login">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/">
            <Header>
              <Home />
            </Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
