import React from "react";
import HomeThreeCol from "./HomeThreeCol";
import Home4Steps from "./Home4Steps";

export default function Home() {
    return (
        <>
        <div className="main__choice">
           <h1>Zacznij pomagać!<br/>
               Oddaj niechciane rzeczy w zaufane ręce
           </h1>
            <button className="main__choice">Oddaj rzeczy</button>
            <button className="main__choice">Zorganizuj zbiórkę</button>
        </div>
        <HomeThreeCol/>
        <Home4Steps/>
        </>
    )
}