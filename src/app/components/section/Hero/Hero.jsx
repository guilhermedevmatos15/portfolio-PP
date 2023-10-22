import React from 'react';

// * components

// * style
import './Hero.scss';
import './HeroResponsive.scss';

// * scripts

// * contexts

// * img
import MyImage from '../../../assets/img/myImage.png';

// * icons
import { AiOutlineArrowDown } from 'react-icons/ai';

const Hero = () => {
   return (
      <section className="Hero" id="home">
         <div className="hero-content">
            <div className="hero-info" data-aos="fade-up">
               <h1>
                  Olá, sou o <br />
                  <span>Guilherme Ferreira</span>
               </h1>
               <p>Desenvolvedor Front-End</p>
            </div>
            <div
               className="hero-buttons"
               data-aos="fade-up"
               data-aos-duration="1600"
            >
               <a href="#about">
                  <button className="btn">
                     <AiOutlineArrowDown className="btn-icon" /> Sobre
                  </button>
               </a>
            </div>
         </div>
         <div
            className="hero-container-image"
            data-aos="zoom-in"
            data-aos-duration="1000"
         >
            <img className="hero-image" src={MyImage} alt="Meu retrato" />
         </div>
      </section>
   );
};

export default Hero;
