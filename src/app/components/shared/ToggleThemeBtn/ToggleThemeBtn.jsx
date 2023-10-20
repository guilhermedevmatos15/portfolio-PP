import React, { useContext } from 'react';

// * components

// * style
import './ToggleThemeBtn.scss';

// * scripts

// * contexts
import { themeContext } from '../../../contexts/ThemeContext';

// * img

// * icons

const ToggleThemeBtn = () => {
   const { toggleTheme } = useContext(themeContext);

   return (
      <div
         className="ToggleThemeBtn toggle-switch"
         onChange={(e) => toggleTheme()}
         title="Change theme"
      >
         <input className="toggle-input" id="toggle" type="checkbox" />
         <label className="toggle-label" htmlFor="toggle"></label>
      </div>
   );
};

export default ToggleThemeBtn;
