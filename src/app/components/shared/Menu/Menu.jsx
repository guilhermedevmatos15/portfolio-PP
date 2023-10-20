import React from 'react';

// * components
import Navigation from '../Navigation/Navigation';
import ToogleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';

// * style
import './Menu.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaXmark } from 'react-icons/fa6';

const Menu = ({ open, setOpen }) => {
   return (
      <div
         className={`Menu ${open && 'open'}`}
         onClick={(e) => e.target.localName === 'a' && setOpen(false)}
      >
         <FaXmark className="icon-close" onClick={(e) => setOpen(false)} />
         <Navigation direction="column" gap="30px" />
         <ToogleThemeBtn />
      </div>
   );
};

export default Menu;
