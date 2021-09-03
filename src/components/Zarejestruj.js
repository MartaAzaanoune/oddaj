import React from "react";

export default function Zarejestruj() {
    return (
        <div>
            <form>
            <h2>Załóż konto</h2>
            <label>
                Email
                <input type="text" name="text"/>
            </label>
            <label>
                Hasło
                <input type="text" name="text"/>
            </label>
            <label>
                Powtórz hasło
                <input type="text" name="text"/>
            </label>
            </form>
            <button>Zaloguj</button>
            <button>Załóż konto</button>
        
        </div>
    )
}