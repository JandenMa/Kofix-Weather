import React, { Component } from 'react';
import {
    WeatherRainy,
    WeatherSunny,
    WeatherCloudy,
    WeatherWindy,
    WeatherWindyVariant,
    WeatherLightningRainy,
    WeatherFog,
    WeatherHail,
    WeatherHurricane,
    WeatherLightning,
    WeatherNight,
    WeatherPartlycloudy,
    WeatherPouring,
    WeatherSnowy,
    WeatherSnowyRainy
} from 'mdi-material-ui';

export default class Icons extends Component {
    constructor(...args) {
        super(...args);
        this.state = { weatherIcon: <WeatherPartlycloudy /> }
    }

    componentWillMount() {
        switch (this.props.code) {
            case '0':
            case '1':
            case '2':
                this.setState({ weatherIcon: <WeatherHurricane /> });
                break;
            case '3':
            case '4':
                this.setState({ weatherIcon: <WeatherLightning /> });
                break;
            case '5':
            case '6':
            case '7':
            case '18':
                this.setState({ weatherIcon: <WeatherSnowyRainy /> });
                break;
            case '8':
            case '9':
                this.setState({ weatherIcon: <WeatherRainy /> });
                break;
            case '10':
            case '11':
            case '12':
                this.setState({ weatherIcon: <WeatherPouring /> });
                break;
            case '13':
            case '14':
            case '15':
            case '16':
            case '41':
            case '42':
            case '43':
            case '46':
                this.setState({ weatherIcon: <WeatherSnowy /> });
                break;
            case '17':
            case '35':
                this.setState({ weatherIcon: <WeatherHail /> });
                break;
            case '19':
            case '20':
            case '21':
            case '22':
                this.setState({ weatherIcon: <WeatherFog /> });
                break;
            case '23':
                this.setState({ weatherIcon: <WeatherWindy /> });
                break;
            case '24':
            case '25':
                this.setState({ weatherIcon: <WeatherWindyVariant /> });
                break;
            case '26':
            case '27':
            case '29':
            case '44':
                this.setState({ weatherIcon: <WeatherCloudy /> });
                break;
            case '28':
            case '30':
                this.setState({ weatherIcon: <WeatherPartlycloudy /> });
                break;
            case '31':
            case '33':
                this.setState({ weatherIcon: <WeatherNight /> });
                break;
            case '32':
            case '34':
            case '36':
                this.setState({ weatherIcon: <WeatherSunny /> });
                break;
            case '37':
            case '38':
            case '39':
            case '40':
            case '45':
            case '47':
                this.setState({ weatherIcon: <WeatherLightningRainy /> });
                break;
            default:
                break;
        }
    }
    
    render() {
        return (
            <div>
                {this.state.weatherIcon}
            </div>
        )
    }
}
