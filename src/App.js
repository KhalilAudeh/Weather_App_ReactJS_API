import React, { Component } from 'react'
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '248a8acbc2e1cadf7e55929ecc1ab513'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      // the pieces we need to view are the info data; we chose 5 pieces of state were they are undefined at the beginning
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined  
    }
  }
  
  // create method to get the weather
  // e: event object in JS not for react.js
  // async await: great way of making HTTP calls and makes web requests easy
  getWeather = async (e) => {
    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    // in the fetch, we have to add the URL as a template string in which we can inject the variables we define
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)

    // NEXT, we need to convert the response to JSON (JS Object Notation) format
    // it converts the data from API to a readable format that any programming language can understand
    const data = await api_call.json()

    // making condition to make sure the user enters values and not keeping city and country names empty
    if(city && country){

      // console is used to check that the data from the fetch was passed successfully and to view it in the console
      console.log(data)

      // setting the 5 states mentioned above
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "ERROR ! Please enter city and country names."
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles></Titles>
                </div>
                <div className="col-xs-7 form-container">
                  {/* this keyword: refers to App Component */}
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App