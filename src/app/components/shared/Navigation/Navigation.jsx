import React from 'react';

// * components

// * style
import './Navigation.scss';

// * scripts

// * contexts

// * img

// * icons

const Navigation = ({ direction, gap }) => {
   const sectionsId = ['home', 'habilidades', 'projetos', 'contato'];

   const styleUl = {
      flexDirection: direction,
      gap,
   }

   return (
      <nav className="Navigation">
         <ul style={styleUl}>
            {sectionsId.map((id) => {
               return (
                  <li key={id}>
                     <a href={`#${id}`}>{id}</a>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};

export default Navigation;
