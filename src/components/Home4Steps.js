import React from "react";

export default function Home4Steps() {
    return (
        <div className="main__choice">
            <h1>Wystarczą 4 proste kroki</h1>
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
            <button className="main__choice">Oddaj rzeczy</button>
        </div>
    )
}