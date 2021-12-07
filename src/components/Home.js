import React, {useState} from "react";
import Typewriter from 'typewriter-effect';
import "./Home.css";
import logo from "./../img/logo.png";
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(false);

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="logo" style = {{height: "70px"}}/>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home" className = "izdadcha">
                <li className="nav__items mx__15">Inicio</li>
              </a>
              <a href="#About" className = "izdadcha">
                <li className="nav__items mx__15">Sobre</li>
              </a>
              {/* <a href="#Services">
                <li className="nav__items mx__15">Servicios</li>
              </a> */}
              <a href="#Portfolio" className = "izdadcha">
                <li className="nav__items mx__15">Proyectos</li>
              </a>
              {/* <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a> */}
              <a href="#Contact" className = "izdadcha">
                <li className="nav__items mx__15">Contactame</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu ">
            {
              !show ? 
              <GiHamburgerMenu 
                onClick={() => setShow(!show)}
                className = "btn-menu animate__animated animate__fadeIn"
              ></GiHamburgerMenu>
              :
              <GrClose
                onClick={() => setShow(!show)}
                className = "btn-menu-close animate__animated animate__fadeIn"
              ></GrClose>
            }
          </div>
          {show ?(
          <div className="sideNavbar ">
              <ul className="sidebar d__flex animate__animated animate__fadeInRight">
              <li className="sideNavbar">
              <a href="#Home">Inicio</a>
            </li>
            <li className="sideNavbar">
              <a href="#About">Sobre Mi</a>
            </li>
            {/* <li className="sideNavbar">
              <a href="#Services">Services</a>
            </li> */}
            <li className="sideNavbar">
              <a href="#Portfolio">Proyectos</a>
            </li>
            {/* <li className="sideNavbar">
              <a href="#Blog">Blog</a>
            </li> */}
            <li className="sideNavbar">
              <a href="#Contact">Contacatame</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Bienvenido</h1>
              <div className = "home__text pz__10">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Hola, Soy Christhian Silupú!')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Desarrollador Frontend")
                      .start()
                  }}
              />
              </div>
              <h3 className="home__text__2 sweet ">Soy desarrollador de software, residente en Perú, </h3>
              <h3 className="home__text__2 sweet">Me apasiona programar y soy amante de la teconologia.</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
