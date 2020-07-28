import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppLinnea from './LinneaTest';
import Slider from './slider';
import Range from './slider';
import SP500 from './SP500';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(

  <React.StrictMode>
    <Slider />


    {/*<App /> */}
    {/*<AppLinnea />*/}

    <SP500 />

    {/*<Test />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
