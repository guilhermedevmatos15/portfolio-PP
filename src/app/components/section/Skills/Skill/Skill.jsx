import React from 'react';

// * components

// * style
import './Skill.scss';

// * scripts

// * contexts

// * img

// * icons

const Skill = ({ name, icon }) => {
   return (
      <div className="Skill">
         {icon}

         <p className='skill-name'>{name}</p>
      </div>
   );
};

export default Skill;
