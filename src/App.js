import './App.css';

import { 
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import Login from './Pages/Login/index';
import Signup from './Pages/Signup/index';
import Hall from './Pages/Hall/index';
import Kitchen from './Pages/Kitchen/index';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>TÓPICO MAIOR</h1>
      
        <Link to="/"> Login </Link>
        <Link to="/signup"> Registro </Link>
        <Link to="/hall"> Salão </Link>
        <Link to="/kitchen"> Cozinha </Link>

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/hall" exact component={Hall} />
          <Route path="/kitchen" exact component={Kitchen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
