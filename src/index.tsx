import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';

/*import Step1 from './components/Step1/Step1'

import Step2 from './components/Step2/Step2'
import Step3 from './components/Step3/Step3'
import Step4 from './components/Step4/Step4'
*/

ReactDOM.render(
  <React.StrictMode>
    <Home title="Hola"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
