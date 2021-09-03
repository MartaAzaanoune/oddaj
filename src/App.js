import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Zaloguj from "./components/Zaloguj";
import Zarejestruj from "./components/Zarejestruj";
import { Link as Helper } from 'react-scroll';
import React from "react";


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
          <div className="navigation">
              <ul className="navigation__menu_b">
                  <li className="navigation__menu_b">
                      <Link to="/" className="navigation__menu_b">Start</Link>
                  </li>
                  <li className="navigation__menu_b">
                      <Helper activeClass="active" to="4steps" className="navigation__menu_b">O co chodzi?</Helper>
                  </li>
                  <li className="navigation__menu_b">
                      <Helper to="o_nas" duration={1500} className="navigation__menu_b">O nas</Helper>
                  </li>
                  <li className="navigation__menu_b">
                      <Helper to="fundacje_i_organizacje" duration={1500} className="navigation__menu_b">Fundacja i organizacje</Helper>
                  </li>
                  <li className="navigation__menu_b">
                      <Helper to="contact" duration={1500} smooth className="navigation__menu_b">Kontakt</Helper>
                  </li>
              </ul>
          </div>

          <Switch>
              <Route exact path='/'>
                  <Home />
              </Route>
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


