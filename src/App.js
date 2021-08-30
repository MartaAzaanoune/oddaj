import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Zaloguj from "./components/Zaloguj";
import Zarejestruj from "./components/Zarejestruj";



export default function App() {
  return (
      <Router>
        <ul className="navigation__menu_a">
          <li className="navigation__menu_a">
            <Link to="/zaloguj" className="navigation__menu_a">Zaloguj</Link>
          </li>
          <li className="navigation__menu_a">
            <Link to="/zarejestruj" className="navigation__menu_a">Załóż konto</Link>
          </li>
        </ul>
          <Home/>
        <div className="container__main__choice">
            <div className="columns">
              <h1>Zacznij pomagać!   </h1>
              <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <div className="steps">
              <button>
                <Link to="/zaloguj">Oddaj rzeczy</Link>
              </button>
              <button>
                <Link to="/zaloguj">Zorganizuj zbiórkę</Link>
              </button>
            </div>
          </div>
        </div>
          <Switch>
            <Route exact path="/zaloguj">
              <Zaloguj/>
            </Route>
            <Route path="/zarejestruj">
              <Zarejestruj/>
            </Route>
        </Switch>
      </Router>
  );
}


