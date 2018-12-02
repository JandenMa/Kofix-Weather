import React, { Component } from 'react'
import Icons from '../IconsCmp';
import store from '../../store/WeatherStore';
import LibDataUtils from '../../utils/LibDataUtils'
import './index.css'

export default class CurrTemperature extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            temp: '',
            weather: '',
            code: '',
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
                code: data.tempdata.item.condition.code,
                temp: data.tempdata.item.condition.temp,
                weather: data.tempdata.item.condition.text,
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
            }, 100);
        }
    }

    render() {
        return (
            <div className='curr-temp-box'>
                <div className='curr-temp-icon'>
                    <Icons code={this.state.code} />
                </div>
                <div className='curr-temp-line'></div>
                <div className='curr-temp-text'>
                    <span className='temperature'>{this.state.temp}</span>
                    <span className='weather'>{LibDataUtils.getChineseWeather(this.state.code)}</span>
                    <span className='weather'>{this.state.weather}</span>
                </div>
            </div>
        )
    }
}
