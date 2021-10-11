
import HomeThreeCol from "./HomeThreeCol";
import Home4Steps from "./Home4Steps";
import Onas from "./O_nas";
import WhoWeHelp from "./HomeWhoWeHelps";
import Kontakt from "./Kontakt";
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import {Route, Switch,   BrowserRouter as Router,
} from "react-router-dom";
import Zaloguj from "./Zaloguj";
import Zarejestruj from "./Zarejestruj";


export default function Home() {
    return (
        <>
                <div className="container">
                    <div className="container__main__choice">
                        <div className="columns__1">
                            <h1 className="title">Zacznij pomagać!<br/>
                            Oddaj niechciane rzeczy w zaufane ręce<br/></h1>
                            <div className="columns__1__1">
                                <button className="columns__1__1">
                                <Link to="/zaloguj">Oddaj rzeczy</Link>
                                </button>
                                <button className="columns__1__1">
                                <Link to="/zaloguj">Zorganizuj zbiórkę</Link>
                                </button>
                            </div>
                        </div>
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