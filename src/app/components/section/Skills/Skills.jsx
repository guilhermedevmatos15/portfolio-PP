import React from 'react';

// * components
import Skill from './Skill/Skill';

// * style
import './Skills.scss';

// * scripts

// * contexts

// * img

// * icons
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { FaSass } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const Skills = () => {
   return (
      <section className="Skills" id="habilidades">
         <h2
            className="title-section"
            data-aos="fade-up"
            data-aos-duration="1600"
         >
            Habilidades
         </h2>

         <div className="container-skills" data-aos="zoom-in">
            <Skill name="HTML5" icon={<AiFillHtml5 className="skill-icon" />} />
            <Skill name="CSS3" icon={<BiLogoCss3 className="skill-icon" />} />
            <Skill name="JavaScript" icon={<BiLogoJavascript className="skill-icon" />} />
            <Skill name="React" icon={<FaReact className="skill-icon" />} />
            <Skill name="Sass" icon={<FaSass className="skill-icon" />} />
            <Skill name="Git" icon={<BsGit className="skill-icon" />} />
            <Skill name="GitHub" icon={<AiFillGithub className="skill-icon" />} />
         </div>
      </section>
   );
};

export default Skills;
