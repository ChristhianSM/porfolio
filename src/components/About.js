import React from "react";
import "./About.css";
import aboutImg from "./../img/about.jpg";
import css from "./../img/technologys/css.svg";
import html from "./../img/technologys/html.svg";
import js from "./../img/technologys/js.svg";
import react from "./../img/technologys/react.svg";

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <h1 className="about__heading">Acerca de Mi</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hola soy Christhian Silupú Moscol, me enfoco al desarrollo de software, principalmente me entusiasma trabajar con tecnologias del lado del fronted. Soy una persona responsable, eficaz y alegre, siempre pongo todo de mi parte, considero que aquello es lo mejor de mi persona.
              </p>
              <p className="about__text p__color">
                Soy autodidacta y constantemente me gusta adquirir nuevos conocimientos y compartir todo lo aprendido. Me encata enseñar y apoyar a otros para llegar a cumplir sus objetivos.
              </p>
              <div className = "techonologies">
                <h2>Tecnologias</h2>
                <div className = "container-te">
                  <img src={css} alt="css" />
                  <img src={html} alt="html" />
                  <img src={js} alt="js" />
                  <img src={react} alt="react" />
                </div>
              </div>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/14TZm0gMjCu3wZjJiO0TmJqNV8FwUwJL1/view?usp=sharing" target="_blank" rel="noreferrer">
                  <button className="about btn pointer">Descargar Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Contactame</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="/" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
