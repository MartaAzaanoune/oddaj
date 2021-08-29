import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Zaloguj from "./components/Zaloguj";
import Zarejestruj from "./components/Zarejestruj";
import Onas from "./components/O_nas";
import OcoChodzi from "./components/O_co_chodzi";
import FundacjeIorganizacje from "./components/Fundacje_i_organizacje";
import Kontakt from "./components/Kontakt";


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
        <ul className="navigation__menu_b">
          <li className="navigation__menu_b">
            <Link to="/" className="navigation__menu_b">Start</Link>
          </li>
          <li className="navigation__menu_b">
            <Link to="/o_co_chodzi" className="navigation__menu_b" >O co chodzi?</Link>
          </li>
          <li className="navigation__menu_b">
            <Link to="/o_nas" className="navigation__menu_b">O nas</Link>
          </li>
          <li className="navigation__menu_b">
            <Link to="/fundacje_i_organizacje" className="navigation__menu_b" >Fundacja i organizacje</Link>
          </li>
          <li className="navigation__menu_b">
            <Link to="/kontakt" className="navigation__menu_b">Kontakt</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/o_co_chodzi">
            <OcoChodzi/>
          </Route>
          <Route path="/o_nas">
            <Onas/>
          </Route>
          <Route path="/fundacje_i_organizacje">
            <FundacjeIorganizacje/>
          </Route>
          <Route path="/kontakt">
            <Kontakt/>
          </Route>
          <Route path="/zaloguj">
            <Zaloguj/>
          </Route>
          <Route path="/zarejestruj">
            <Zarejestruj/>
          </Route>
        </Switch>

      </Router>
  );
}


