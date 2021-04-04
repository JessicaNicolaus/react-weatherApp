import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import WeatherApp from './WeatherApp';
import './index.css'


const divRoot = document.querySelector('#root');

ReactDOM.render( <WeatherApp />  , divRoot );

