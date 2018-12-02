import * as $ from 'jquery'
export default class LibDataUtils {
    static async getWeatherInfo(city, temptype) {
        let result = await $.ajax({
            url: `https://query.yahooapis.com/v1/public/yql?q=
                select * from weather.forecast where woeid in 
                (select woeid from geo.places(1) where text='${city}')
                and u='${temptype}'&format=json`,
            method: 'GET',
            dataType: 'json'
        });
        return result.query.results.channel;
    }

    static async getCurrentCity() {
        let city;
        await $.ajax({
            // url: 'http://whois.pconline.com.cn/ipJson.jsp',
            url:'http://www.ip-api.com/json',
            method: 'get',
            dataType: 'json'
        }).then(res => {
            city = res.city;
        })
        return city;
    }

    static getChineseWeather(code) {
        let yahoo_weather_resx = {
            "0": "龙卷风",
            "1": "热带风暴",
            "2": "飓风",
            "3": "强雷暴",
            "4": "雷暴",
            "5": "雨夹雪",
            "6": "雨夹雪",
            "7": "雨夹雪",
            "8": "冰冻小雨",
            "9": "小雨",
            "10": "冻雨",
            "11": "阵雨",
            "12": "阵雨",
            "13": "小雪",
            "14": "阵雪",
            "15": "大雪",
            "16": "雪",
            "17": "冰雹",
            "18": "雨雪",
            "19": "多尘",
            "20": "多雾",
            "21": "阴霾",
            "22": "多烟",
            "23": "大风",
            "24": "有风",
            "25": "冷",
            "26": "多云",
            "27": "晴间多云",
            "28": "晴间多云",
            "29": "晴间多云",
            "30": "晴间多云",
            "31": "晴朗",
            "32": "晴朗",
            "33": "晴朗",
            "34": "晴朗",
            "35": "雨和冰雹",
            "36": "炎热",
            "37": "雷阵雨",
            "38": "零星雷阵雨",
            "39": "零星雷阵雨",
            "40": "零星雷阵雨",
            "41": "大雪",
            "42": "零星阵雪",
            "43": "大雪",
            "44": "多云",
            "45": "雷阵雨",
            "46": "阵雪",
            "47": "雷阵雨",
            "3200": "错误"
        };
        return yahoo_weather_resx[code];
    }
}