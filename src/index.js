import React from 'react';
import ReactDOM from 'react-dom/client';

// * test
import reportWebVitals from './tests/reportWebVitals';

// * style
import './app/styles/_index.scss';

// * components
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

reportWebVitals();
