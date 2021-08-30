import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Fundacje from "./HomeWhoFundations";
import Organizacje from "./HomeWhoOrganizations";
import Lokalne from "./HomeWhoLocal";

export default function Who() {
    return (
        <div className="container__who">
            <div className="columns">
            <h2>Komu pomagamy</h2>
            <img/>
            <Router>
            <ul>
                <li>
                    <Link to="/fundations">Fundacjom</Link>
                </li>
                <li>
                    <Link to="/organizations">Organizacjom pozarządowym</Link>
                </li>
                <li>
                    <Link to="/local">Lokalnym zbiórkom</Link>
                </li>
            </ul>
                <Switch>
                    <Route exact path="/fundations">
                        <Fundacje/>
                    </Route>
                    <Route path="/organizations">
                        <Organizacje/>
                    </Route>
                    <Route path="/local">
                        <Lokalne/>
                    </Route>
                </Switch>
            </Router>
            </div>
        </div>
    )
}