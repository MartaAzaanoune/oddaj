import React from "react";

export default function Home4Steps() {
    return (
        <div className="container">
            <div className="container__main__choice" id="4steps">
             <h1 className="container__main__choice" >Wystarczą 4 proste kroki</h1>
                <div className="steps">
                    <div className="one_step">
                        <img className="steps"/>
                        <p>Wybierz rzeczy</p>
                        <p>ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                    <div className="one_step">
                     <img className="steps"/>
                        <p>Spakuj je</p>
                        <p>ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                    <div className="one_step">
                        <img className="steps"/>
                        <p>Wybierz komu<br/>
                        chcesz pomóc</p>
                        <p>ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                    <div className="one_step">
                        <img className="steps"/>
                        <p>Zamów kuriera</p>
                        <p>ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                </div>
                <div className="steps">
                    <button>Oddaj rzeczy</button>
                </div>
            </div>
        </div>
    )
}