import React from 'react';
import './Contact.css';
import contactImg from "./../img/about-9.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contactame</h1>
                            <p className="hire__text white">Estoy disponible para trabajo freelance. Conectate con mi numero de telefono : </p>
                           <p className="hire__text white"><strong>+51959686193</strong> o por email <strong>christhian2524@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Nombre *" />
                           <input type="text" className="contact email" placeholder="Email *" />
                           <input type="text" className="contact subject" placeholder="Tema " />
                           <textarea name="message" id="message" placeholder="Escribe tu mensaje"></textarea>
                           <button className="btn contact pointer" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
