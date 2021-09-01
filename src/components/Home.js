
import HomeThreeCol from "./HomeThreeCol";
import Home4Steps from "./Home4Steps";
import Onas from "./O_nas";
import WhoWeHelp from "./HomeWhoWeHelps";
import OcoChodzi from "./O_co_chodzi";
import Kontakt from "./Kontakt";
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import {Route, Switch,   BrowserRouter as Router,
} from "react-router-dom";
import Zaloguj from "./Zaloguj";
import Zarejestruj from "./Zarejestruj";


export default function Home() {
    return (
        <>
            <div className="container__main__choice">
                <div className="columns">
                    <h1>Zacznij pomagać!   </h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <Router>
                    <div className="steps">
                        <button>
                            <Link to="/zaloguj">Oddaj rzeczy</Link>
                        </button>
                        <button>
                            <Link to="/zaloguj">Zorganizuj zbiórkę</Link>
                        </button>
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
                    </div>
                    </Router>
                </div>
            </div>
            <HomeThreeCol/>
            <Home4Steps/>
            <Onas/>
            <WhoWeHelp/>

            <Kontakt/>
        </>
    )
}