import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FreeDoller from "./component/FreeDoller";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/freedoller" component={FreeDoller} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
