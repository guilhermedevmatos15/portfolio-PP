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
      <section className="Hero" id='home'>
         <div className="hero-content">
            <div className="hero-info">
               <h1>
                  Olá, sou o <br />
                  <span>Guilherme Ferreira</span>
               </h1>
               <p>Desenvolvedor Front-End</p>
            </div>
            <div className="hero-buttons">
               <a href="#about">
                  <button className="btn">
                     <AiOutlineArrowDown className='btn-icon' /> Sobre
                  </button>
               </a>
            </div>
         </div>
         <div className="hero-container-image">
            <img className="hero-image" src={MyImage} alt="Meu retrato" />
         </div>
      </section>
   );
};

export default Hero;
