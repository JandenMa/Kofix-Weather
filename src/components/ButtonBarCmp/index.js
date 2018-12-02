import React, { Component } from 'react'
import { Toolbar, IconButton, Snackbar } from '@material-ui/core'
import AddBtn from '@material-ui/icons/Add';
import MinusBtn from '@material-ui/icons/Remove';
import RefreshBtn from '@material-ui/icons/Refresh';
import store from '../../store/WeatherStore';
import './index.css'

export default class ButtonBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempCClasses: 'temptype active',
            tempFClasses: 'temptype',
            toastStatus: false,
            toastMsg: '',
        }
    }

    toast = msg => () => {
        this.setState({
            toastStatus: true,
            toastMsg: msg
        })
        setTimeout(() => {
            this.setState({
                toastStatus: false
            })
        }, 3000)
    }

    changeTempType(type) {
        switch (type) {
            case 'c':
                store.dispatch({ type: 'getWeather', params: { temptype: 'c' } });
                this.setState({
                    tempCClasses: 'temptype active',
                    tempFClasses: 'temptype'
                })
                break;
            case 'f':
                store.dispatch({ type: 'getWeather', params: { temptype: 'f' } });
                this.setState({
                    tempCClasses: 'temptype',
                    tempFClasses: 'temptype active'
                })
                break;
            default:
                break;
        }
    }

    refresh() {
        store.dispatch({ type: 'getWeather' })
    }

    render() {
        const { toastMsg, toastStatus } = this.state;
        return (
            <div>
                <Toolbar className='btnbar'>
                    <div className='temptype-box'>
                        <IconButton>
                            <label className={this.state.tempCClasses} onClick={this.changeTempType.bind(this, 'c')}>°C</label>
                        </IconButton>
                        <IconButton>
                            <label className={this.state.tempFClasses} onClick={this.changeTempType.bind(this, 'f')}>°F</label>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton disabled>
                            <div className='toolbtn'><MinusBtn /></div>
                        </IconButton>
                        <IconButton>
                            <div className='toolbtn' onClick={this.toast('I am sorry that I have not enough time to do it in perfect, please expecting for the next version.')}><AddBtn /></div>
                        </IconButton>
                        <IconButton>
                            <div className='toolbtn' onClick={this.refresh}><RefreshBtn /></div>
                        </IconButton>
                    </div>
                </Toolbar>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={toastStatus}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{toastMsg}</span>}
                />
            </div>
        )
    }
}
