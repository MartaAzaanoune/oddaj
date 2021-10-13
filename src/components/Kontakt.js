import React from "react";

export default function Kontakt() {
    return (
        <div className="container">
            <div className="container__contact">
                <h1 className="container__contact__title">Skontaktuj sie z nami</h1>
                <form className="container__contact__form">
                    <div className="container__contact__form__first_line">
                        <label className="container__contact__form_name">Wpisz swoje imię:
                            <input type="text" name="name" placeholder="Kamil" className="container__contact__form"/>
                        </label>
                        <label className="container__contact__form_email">Wpisz swój email:
                            <input type="text" name="email" placeholder="kamil@gmail.com" className="container__contact__form"/>
                        </label>
                    </div>
                    <label className="container__contact__form">Wpisz swoją wiadomość:
                        <textarea className="container__contact__form" cols="50" rows="10">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat</textarea>
                </label>
                <input type="submit" value="Wyślij" />
                </form>
            </div>
        </div>
    )
}