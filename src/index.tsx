import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home title="Hola"/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
