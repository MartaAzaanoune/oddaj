import React, {Fragment} from "react";

import HomeThreeCol from "./HomeThreeCol";
import Home4Steps from "./Home4Steps";
import Onas from "./O_nas";
import Who from "./HomeWhoWeHelps";
import OcoChodzi from "./O_co_chodzi";
import Kontakt from "./Kontakt";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export default function Home() {
    return (
        <>
            <div className="navigation">
                <ul className="navigation__menu_b">
                    <li className="navigation__menu_b">
                        <Link to="/" className="navigation__menu_b">Start</Link>
                    </li>
                    <li className="navigation__menu_b">
                        <Link activeClass="active" to="4steps" className="navigation__menu_b" >O co chodzi?</Link>
                    </li>
                    <li className="navigation__menu_b">
                        <Link to="o_nas" className="navigation__menu_b">O nas</Link>
                    </li>
                    <li className="navigation__menu_b">
                        <Link to="fundacje_i_organizacje" className="navigation__menu_b" >Fundacja i organizacje</Link>
                    </li>
                    <li className="navigation__menu_b">
                        <Link to="kontakt" className="navigation__menu_b">Kontakt</Link>
                    </li>
                </ul>
            </div>


            <HomeThreeCol/>
                <Element name="4steps" className="element">
                    <Home4Steps/>
                </Element>
                <Element name="o_nas" className="element">
                    <Onas/>
                </Element>
            <Who/>
    </>
    )
}