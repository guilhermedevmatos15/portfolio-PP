import React from 'react';

// * components
import Project from './Project/Projetc';

// * style
import './Projects.scss';

// * scripts
import projects from '../../../data/projects';

// * contexts

// * img
import ImageEmpreenderMaster from '../../../assets/img/projects/eMaster/logo.png';
import ImageArcha from '../../../assets/img/projects/archa/logo.png';
import ImageBitco from '../../../assets/img/projects/bitco/logo.png';
import ImageNifty from '../../../assets/img/projects/nifty/logo.png';
import ImageSefu from '../../../assets/img/projects/sefu/logo.png';
import ImageReallyGreat from '../../../assets/img/projects/reallyGreat/logo.png';
import ImageXpGames from '../../../assets/img/projects/xpGames/logo.png';
import ImageWooxCripto from '../../../assets/img/projects/wooxCripto/logo.png';

// * icons

const Projects = () => {
   // ? Atenção! Cuidado na ordem que está estabelecida nesse array! Ele deve estar na mesma ordem do array 'projects', no qual contém as informações dos projetos.
   const images = [
      ImageEmpreenderMaster,
      ImageArcha,
      ImageNifty,
      ImageBitco,
      ImageSefu,
      ImageReallyGreat,
      ImageXpGames,
      ImageWooxCripto,
   ];

   return (
      <section className="Projects" id="projetos">
         <h2 className="title-section" data-aos="fade-up">
            Projetos
         </h2>
         <p data-aos="fade-up" data-aos-duration="1400">
            Clique no "card" de cada projeto para saber mais.
         </p>

         <div
            className="container-projects"
            data-aos="zoom-in"
            data-aos-duration="1600"
         >
            {projects.map((project, index) => {
               return (
                  <Project
                     key={project.name}
                     name={project.name}
                     link={project.link}
                     repositoryLink={project.repositoryLink}
                     date={project.date}
                     type={project.type}
                     about={project.about}
                     image={images[index]}
                     lowImage={project.name === 'Xp Games' && true}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default Projects;
