import React, { useState } from 'react';
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es');
// console.log(`fecha`, moment('2021-04-04').format('dddd'))

const api = {
    key: 'e73cf9d0b3bcfad7f2bc15683b3bf10e',
    base: "https://api.openweathermap.org/data/2.5/"
}


const WeatherApp = () => {

    const [query, setQuery] = useState('')
    const [clima, setClima] = useState({});

    const buscar = (evento) => {

        if (evento.key == 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setClima(result);
                    setQuery('');
                    console.log('resultado de busqueda', result);
                })
                .catch( console.warn );
        }

    }

    return (
        <>
            <main className='app'>
                <div className="search-box">
                    <input type="text"
                        className="search-bar"
                        placeholder="Buscar"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={buscar}
                    />
                </div>
                {clima.main ? (
                    <>
                        <div className="location-box">
                            <div className="location">{clima.name}, {clima.sys.country}</div>
                            <div className="date">{moment().format('LLLL')}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(clima.main.temp)}°c
                    </div>
                            <div className="weather">{clima.weather[0].description}</div>
                        </div>
                    </>
                ) : ('')}

            </main>
        </>
    );

}

export default WeatherApp;