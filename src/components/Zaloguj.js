import React from "react";

export default function Zaloguj() {
    return (
        <div>
            <form>
            <h2>Zaloguj</h2>
            <label>
                Email
                <input type="text" name="email" />
             </label>
            <label>
                 Hasło
                 <input type="text" name="hasło"/>
             </label> 
            </form>
            <button>Zaloguj</button>
            <button>Załóż konto</button>

        </div>
    )
}