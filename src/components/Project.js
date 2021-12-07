import React from "react";
import "./Project.css";
import Project1 from './../img/portfolio-1.jpg';
import Project2 from './../img/portfolio-2.jpg';
import Project3 from './../img/portfolio-3.jpg';
import Project4 from './../img/portfolio-4.jpg';
import Project5 from './../img/portfolio-5.jpg';
import Project6 from './../img/portfolio-6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Mis Proyectos</h1>
        <p className="heading p__color">
            Algunos de mis proyectos recientes
        </p>
      </div>
       <div className="container">
           <div className="row">
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Tienda Virtual</h5>
                     <h4 className="project__text">ElectroStore</h4>
                     <div>
                        <a href="https://github.com/ChristhianSM/ecommerce-electro-store" rel="noreferrer" target = "_blank" className="project__btn">Ver Detalles</a>
                        <a href="https://ecommerce-electro-store-final-raiudv84n-christhiansm.vercel.app/" className="project__btn" rel="noreferrer" target = "_blank">Demo</a>
                        </div>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Peliculas</h5>
                     <h4 className="project__text">FilmsChris</h4>
                     <div>
                        <a href="https://github.com/ChristhianSM/films-js" className="project__btn" rel="noreferrer" target = "_blank">Ver Detalles</a>
                        <a href="https://christhiansm.github.io/films-js/peliculas.html#" className="project__btn" rel="noreferrer" target = "_blank">Demo</a>
                     </div>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Catalogo Virtual</h5>
                     <h4 className="project__text">Soya</h4>
                     <div>
                        <a href="https://github.com/ChristhianSM/soya" rel="noreferrer" target = "_blank" className="project__btn">Ver Detalles</a>
                        <a href="https://soya.netlify.app/" rel="noreferrer" target = "_blank" className="project__btn">Demo</a> 
                     </div>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Web Site</h5>
                     <h4 className="project__text">Tak</h4>
                     <div>
                        <a href="https://github.com/ChristhianSM/tak-project" className="project__btn" rel="noreferrer" target = "_blank">Ver Detalles</a>
                        <a href="https://tak-proyect.netlify.app/" className="project__btn" rel="noreferrer" target = "_blank">Demo</a>
                     </div>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Web Site</h5>
                     <h4 className="project__text">Colegio Proyecto</h4>
                     <div>
                        <a href="https://github.com/ChristhianSM/colegio-proyecto-final" className="project__btn" rel="noreferrer" target = "_blank">Ver Detalles</a>
                        <a href="https://christhiansm.github.io/colegio-proyecto-final/" className="project__btn" rel="noreferrer" target = "_blank">Demo</a>
                     </div>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Applicacion web</h5>
                     <h4 className="project__text">Willfire</h4>
                     <div>
                        <a href="https://github.com/ChristhianSM/fire-tracker-app" className="project__btn" rel="noreferrer" target = "_blank">Ver Detalles</a>
                        <a href="https://christhiansm.github.io/fire-tracker-app/" className="project__btn" rel="noreferrer" target = "_blank">Demo</a>
                     </div>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <a className="project__btn" rel="noreferrer" target = "_blank" href = "https://github.com/ChristhianSM?tab=repositories">Ver Más</a>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
