import React from "react";

export default function Home4Steps() {
    return (
        <div className="container">
            <div className="container__4steps">
             <h1 className="title" >Wystarczą 4 proste kroki</h1>
                <div className="steps">
                    <div className="one_step">
                        <p className="one_step_1">Wybierz rzeczy</p>
                        <p className="one_step_1">ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                    <div className="one_step">
                        <p className="one_step_2">Spakuj je</p>
                        <p className="one_step_2">ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                    <div className="one_step">
                        <p className="one_step_3">Wybierz komu<br/>
                        chcesz pomóc</p>
                        <p className="one_step_3">ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                    <div className="one_step">
                        <p className="one_step_4">Zamów kuriera</p>
                        <p className="one_step_1">ubrania, zabawki,<br/>
                        sprzęt i inne</p>
                    </div>
                </div>
                <div className="steps__button">
                    <button className="steps__button">Oddaj rzeczy</button>
                </div>
            </div>
        </div>
    )
}