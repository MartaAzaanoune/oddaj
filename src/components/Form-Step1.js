import React from "react";

export default function Zaloguj() {
    return (
        <div className="form_step_1">
            <div className="info">
                <span>Ważne<br/>
                Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedziec, komu najlepiej je przekazać.</span>
            </div>
            <form className="form_step_1_main">
                <span>Krok 1/4</span>
                <h4>Zaznacz co chcesz oddać</h4>
                <input type="checkbox" checked="false" name="clothes"></input>
                <input type="checkbox" checked="false" name="clothes"></input>
                <input type="checkbox" checked="false" name="clothes"></input>
                <input type="checkbox" checked="false" name="clothes"></input>
                <input type="checkbox" checked="false" name="clothes"></input>
            </form>
        </div>
    )
}