import React, { useContext } from 'react';

// components
import Home from './app/pages/Home/Home';

// style
import './app/styles/_index.scss';

// context
import { themeContext } from './app/contexts/ThemeContext';

// AOS Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
   duration: 1300,
});

const App = () => {
   const { theme } = useContext(themeContext);

   return (
      <div className={`App ${theme}`}>
         <Home />
      </div>
   );
};

export default App;
