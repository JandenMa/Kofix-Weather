import React, { Component } from 'react'
import Header from './components/HeaderCmp'
import DailyForecast from './components/DailyForecastCmp'
import ButtonBar from './components/ButtonBarCmp'
import CurrTemperature from './components/CurrTemperatureCmp'
import Footer from './components/FooterCmp'
import store from './store/WeatherStore';
import './App.css';

class App extends Component {

  async componentDidMount() {
      await store.dispatch({ type: 'getWeather' })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <ButtonBar></ButtonBar>
        <CurrTemperature></CurrTemperature>
        <DailyForecast></DailyForecast>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
