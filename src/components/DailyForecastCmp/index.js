import React, { Component } from 'react'
import Icons from '../IconsCmp';
import store from '../../store/WeatherStore';
import './index.css';

export default class DailyForecast extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            weatherForecastList: [],
            operateTime: 0
        }
        store.subscribe(() => {
            this.setData();
        });
    }

    setData() {
        let data = store.getState();
        if (data && data.operateTime && (this.state.operateTime !== 0) && (data.operateTime !== this.state.operateTime)) {
            this.setState({
                weatherForecastList: data.tempdata.item.forecast,
                operateTime: data.operateTime
            })
        } else {
            setTimeout(() => {
                if (this.state.operateTime === 0) {
                    this.setState({
                        operateTime: data.operateTime
                    });
                }
                this.setData();
            }, 50);
        }
    }

    render() {
        return (
            <div className='daily-forecast-box'>
                {
                    this.state.weatherForecastList.map((item, index) => {
                        if (index < 5) {
                            return (
                                <div key={index} className='daily-forecast-item'>
                                    <p className='day'>{item.day}</p>
                                    <div className='icon'><Icons code={item.code} /></div>
                                    <p>
                                        <span className='lowtemp'>{item.low}</span>&nbsp;
                                        <span className='hightemp'>{item.high}</span>
                                    </p>
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        )
    }
}
