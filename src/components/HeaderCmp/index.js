import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import LeftBtn from '@material-ui/icons/ChevronLeft';
import RightBtn from '@material-ui/icons/ChevronRight';
import store from '../../store/WeatherStore';
import './index.css';

export default class Header extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            city: '',
            operateTime: 0,
            toastStatus: false,
            toastMsg: '',
        }
        store.subscribe(() => {
            this.setData();
        })
    }

    setData() {
        let data = store.getState();
        if (data && data.operateTime && (this.state.operateTime !== 0) && (data.operateTime !== this.state.operateTime)) {
            this.setState({
                city: data.city,
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

    render() {
        const { toastMsg, toastStatus } = this.state;
        return (
            <header className='navbar-box'>
                <IconButton onClick={this.toast('I am sorry that I have not enough time to do it in perfect, please expecting for the next version.')}>
                <LeftBtn className="navbar-icon" />
                </IconButton>
                <span className='navbar-city'>{this.state.city}</span>
                <IconButton onClick={this.toast('I am sorry that I have not enough time to do it in perfect, please expecting for the next version.')}>
                    <RightBtn className="navbar-icon" />
                    </IconButton>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={toastStatus}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{toastMsg}</span>}
                />
            </header>
        )
    }
}
