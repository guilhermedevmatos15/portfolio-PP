import React from 'react';
import ReactDOM from 'react-dom/client';

// * test
import reportWebVitals from './tests/reportWebVitals';

// * components
import App from './App.js';

// * contexts
import ThemeContext from './app/contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ThemeContext>
         <App />
      </ThemeContext>
   </React.StrictMode>
);

reportWebVitals();
