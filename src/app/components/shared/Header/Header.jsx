import React from 'react';

// * components
import Navigation from '../Navigation/Navigation';
import ToogleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';

// * style
import './Header.scss';
import './HeaderResponsive.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaBars } from 'react-icons/fa';

const Header = ({ setOpen }) => {
   return (
      <header className="Header">
         <div className="ignore"></div>
         <Navigation direction="row" gap="30px" />
         <ToogleThemeBtn />
         <FaBars className="menu-icon" onClick={(e) => setOpen(true)} />
      </header>
   );
};

export default Header;
