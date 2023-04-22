import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Sunny from './../images/SunnyGif-1mb.gif'
import Cloudy from './../images/snowflake.png'


const WeatherDetails = (props) => {


    const [data, setData] = useState({})

    const [location, setLocation] = useState('')




    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b19f438485712beb649918a77eabe899`


    const searchlocation = (event) => {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')



    }




    return (
        <div>
            <div className="container my-2">
                <div className='content'>
                    <div className="conatiner">
                        <div className="topheader">
                            <input className='search' placeholder='Search location' value={location} onChange={event => setLocation(event.target.value)} type='text' />
                            <input className='button' type='submit' value="Search" onClick={searchlocation} />
                        </div>
                    </div>
                    <div className="container my-3">
                        <div className="maincontent">
                            <div className="logoimage">
                            <img src={data.main ? data.main.temp > 29 ? Sunny : " " : null} alt='' height="100px"></img>
                            <img src={data.main ? data.main.temp >= 1 && data.main ? data.main.temp <= 28.99 ? Cloudy : null : null : null} alt='' height="100px" ></img>
                            </div>
                            <div className='main-temp'>{data.main ? data.main.temp : null}&#176;</div>
                            <div className='name'>{data.name}</div>
                            <p className='condition'>{data.weather ? data.weather[0].main : null}</p>

                            <h4>{data.main ? data.main.humidity : null}%</h4>

                            <small>Feels Like <b>{data.main ? data.main.feels_like : null} &#176;</b></small>

                            <h4>{data.main ? data.main.temp_min : null}&#176;</h4>
                            <h4>{data.main ? data.main.temp_max : null}&#176;</h4>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WeatherDetails