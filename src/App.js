import React from 'react';
import Axios from 'axios';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Display from './Component/Display/Display';



class App extends React.Component {

  state = {
    coords: {
      latitude: 45,
      longitude: 60
    },
    data: {},
    inputData: ""
  }

  //get device location
  componentDidMount() {
    if (navigator.geolocation) {
      //console.log("supported");
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({ coords: newCoords });
        //console.log(position.coords.latitude)

        Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&units=metric&appid=97e83da07601e2b12b79936586f6096b`).then(res => {

          let weatherData = {
            location: res.data.name,
            // region:res.data.city.name,
            temperature: res.data.main.temp,
            country: res.data.sys.country,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            img: res.data.weather[0].icon,
            description: res.data.weather[0].description,
            wind_speed: res.data.wind.speed,
            precip: res.data.main.feels_like,

          }
          this.setState({ data: weatherData })
        })
      });
    }
    else {
      console.log("not supported");
    }
  }

  // input field track
  changeInput = (value) => {
    this.setState({ inputData: value })
  }

  changeWeather = (event) => {
    event.preventDefault();
    //api call
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&units=metric&appid=97e83da07601e2b12b79936586f6096b`).then(res => {
      //console.log(res);
      let weatherData = {
        location: res.data.name,
        // region:res.data.city.name,
        temperature: res.data.main.temp,
        country: res.data.sys.country,
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        img: res.data.weather[0].icon,
        description: res.data.weather[0].description,
        wind_speed: res.data.wind.speed,
        precip: res.data.main.feels_like,

      }
      this.setState({ data: weatherData })
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar changeLocation={this.changeWeather} changeRegion={this.changeInput} />
        <Display weatherData={this.state.data} />



      </div>
    );
  }
}

export default App;
