import React, { Component } from 'react'
import store from '../../store/WeatherStore';
import * as moment from 'moment';
import './index.css';

export default class Footer extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            lastBuildDate:'',
            operateTime: 0
        }
        store.subscribe(() => {
            this.setData();
        })
    }

    setData() {
        let data = store.getState();
        if (data && data.operateTime && (this.state.operateTime !== 0) && (data.operateTime !== this.state.operateTime)) {
            let date = moment.utc(data.operateTime);
            this.setState({
                lastBuildDate: date.format('YYYY-MM-DD, HH:mm'),
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
            <div className='footer'>
                <div>YAHOO! Weather</div>
                <div>Last Update Time: {this.state.lastBuildDate}
                </div>
            </div>
        )
    }
}
