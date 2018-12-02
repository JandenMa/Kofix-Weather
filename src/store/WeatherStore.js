import {
    createStore
} from 'redux';
import LibDataUtils from '../utils/LibDataUtils';

const store = createStore((state = {
    tempType: 'c',
    city: '',
    tempdata: {},
    operateTime: Date.parse(new Date())
}, action) => {
    switch (action.type) {
        case 'getWeather':
            getWeather(action, state);
            return state;
        case 'getCity':
            getCity(action, state);
            return state;
        default:
            return state;
    }
})

async function getCity(action, state) {
    state.city = await LibDataUtils.getCurrentCity();
    return state;
}


async function getWeather(action, state) {
    await getCity(action, state);
    if (action.params && action.params.temptype) {
        state.tempType = action.params.temptype;
    }
    let data = await LibDataUtils.getWeatherInfo(state.city, state.tempType);
    state.tempdata = data;
    state.operateTime = Date.parse(new Date());
    return state;
}

export default store;