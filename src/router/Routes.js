import { Route, BrowserRouter, Switch } from "react-router-dom";
import { history } from "../history";
import Register from "../pages/register";
import Login from "../pages/login";
import Hall from "../pages/hall";
import Kitchen from "../pages/kitchen";
import NotFound from "../pages/notfound";
//import PrivateRoute from "../components/PrivateRoute";
//import PrivateRoute from "../services/auth"

export default function Routes() {
  return (
    <BrowserRouter history={ history }>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route path="/hall" component={Hall} />
        <Route path="/kitchen" component={Kitchen} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}