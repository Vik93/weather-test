<template>
    <div class="city">
        <h1>
            {{cityWeather.name}}, {{cityWeather.sys.country}}
            <span @click="addFavorite(cityWeather, cityWeather.id)" :title="favorite">
                <svg width="35" height="34" viewBox="-1 -1 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :class="{favorites: addFavorites}" d="M29.3136 13.0386L24.0642 18.156C23.8404 18.3744 23.7378 18.6882 23.7906 18.996L25.0302 26.2212C25.1694 27.033 24.8424 27.8376 24.1758 28.3224C23.799 28.5966 23.3574 28.7352 22.914 28.7352C22.5726 28.7352 22.2294 28.653 21.9126 28.4862L15.4236 25.0746C15.147 24.9294 14.817 24.9294 14.5404 25.0746L8.052 28.4862C7.3218 28.8708 6.4548 28.8078 5.7888 28.3224C5.1222 27.8376 4.7952 27.033 4.9344 26.2212L6.1734 18.9954C6.2262 18.6882 6.1236 18.3738 5.8998 18.1554L0.650398 13.0386C0.0605975 12.4638 -0.147602 11.6202 0.106798 10.836C0.361798 10.0518 1.026 9.492 1.8414 9.3738L9.0966 8.319C9.4056 8.274 9.6732 8.0802 9.8112 7.8L13.0554 1.2258C13.4196 0.487198 14.1588 0.0281982 14.982 0.0281982C15.8058 0.0281982 16.545 0.487198 16.9092 1.2258L20.1528 7.8C20.2908 8.0802 20.5578 8.274 20.8668 8.319L28.122 9.3732C28.938 9.492 29.6022 10.0518 29.8572 10.836C30.1116 11.6202 29.9034 12.4638 29.3136 13.0386Z" fill="white"/>
                </svg>
            </span>
        </h1>
        <p>
            {{date()}}
            <span :title="reload">
                <svg @click="reloadPage(cityWeather.name)" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3565 0C6.59326 0 2.71979 3.87755 2.71979 8.64082V8.66939L1.00958 6.09388C0.842237 5.84082 0.49938 5.77143 0.246319 5.93878C-0.00674218 6.10612 -0.0761299 6.44898 0.091217 6.70204L2.57285 10.4367C2.66265 10.5714 2.8055 10.6571 2.96469 10.6776C2.98918 10.6816 3.00958 10.6816 3.03407 10.6816C3.16877 10.6816 3.29938 10.6327 3.40142 10.5388L6.8504 7.43265C7.07489 7.22857 7.0953 6.88163 6.89122 6.65306C6.68714 6.42857 6.3402 6.40816 6.11163 6.61224L3.82183 8.68163V8.64082C3.82183 4.48163 7.20142 1.10204 11.3565 1.10204C15.5116 1.10204 18.8953 4.48163 18.8953 8.64082C18.8953 12.8 15.5157 16.1796 11.3606 16.1796C9.34836 16.1796 7.45448 15.3959 6.03407 13.9714C5.81775 13.7551 5.47081 13.7551 5.25448 13.9714C5.03816 14.1878 5.03816 14.5347 5.25448 14.751C6.88714 16.3837 9.05448 17.2816 11.3606 17.2816C16.1198 17.2816 19.9973 13.4082 19.9973 8.64082C19.9973 3.87347 16.1198 0 11.3565 0Z" fill="white"/>
                </svg>
            </span>
        </p>
        <div class="weatherToday">
            <div class="degrees">
                <div class="sunny_or_cloud">
                    <div :title="cityWeather.weather[0].description">
                        <div v-for="(item, index) in weatherImgDayArray" :key="'day' + index">
                            <span v-if="cityWeather.weather[0].main == item.title && !date2()">
                                <img :src="item.icon">
                            </span>
                        </div>
                        <div v-for="(item, index) in weatherImgNightArray" :key="'night' + index">
                            <span v-if="cityWeather.weather[0].main == item.title && date2()">
                                <img :src="item.icon">
                            </span>
                        </div>
                    </div>
                    <div class="sunny_or_cloud_txt">
                        {{cityWeather.weather[0].main}}
                    </div>
                </div>
                <div class="degrees_num">
                    {{temperature(cityWeather.main.temp)}}
                </div>
            </div>
            <div class="weather_settings">
                <div class="title">
                    Wind: <div class="descr">{{cityWeather.wind.speed}} m/s</div>
                </div>
                <div class="title">
                    Humidity: <div class="descr">{{cityWeather.main.humidity}}%</div>
                </div>
                <div class="title">
                    Pressure: <div class="descr">{{cityWeather.main.pressure}} mm</div>
                </div>
                <div class="title">
                    Sunrise: <div class="descr">{{ time(cityWeather.sys.sunrise) }}</div>
                </div>
                <div class="title">
                    Sunset: <div class="descr">{{ time(cityWeather.sys.sunset) }}</div>
                </div>
            </div>
        </div>
        <!--Modal-->
        <b-modal id="modalErrorCity" ref="modalErrorCity" v-model="showModalErrorCity" hide-header hide-footer>
            <div class="d-block text-center">
                <p>Added maximum number of cities</p>
            </div>
        </b-modal>
        <!--Modal-->
    </div>
</template>
<script>
import axios from 'axios';
import store from '../store/index.js';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
    export default {
        data(){
            return{
                favorite: 'Add to favorites',
                reload: 'Reload page',
                addFavorites: false,
                timezoneOffset: null,
                showModalErrorCity: false,
                cityWeather: {
                    dt: Number,
                    name: '',
                    main: {
                        humidity: Number,
                        pressure: Number,
                        temp: Number
                    },
                    sys: {
                        country: '',
                        sunrise: Number,
                        sunset: Number
                    },
                    weather: [{
                        description: '',
                        main: '',
                        icon: ''
                    }],
                    wind: {
                        speed: Number
                    }
                },
                weatherImgDayArray: [
                    { title: 'Clear', icon: require('@/static/img/weather_day/01d.svg') },
                    { title: 'Clouds',  icon: require('@/static/img/weather_day/02d.svg') },
                    { title: 'Rain', icon: require('@/static/img/weather_day/10d.svg') },
                    { title: 'Shower rain', icon: require('@/static/img/weather_day/09d.svg') },
                    { title: 'Thunderstorm', icon: require('@/static/img/weather_day/11d.svg') },
                    { title: 'Snow', icon: require('@/static/img/weather_day/13d.svg') },
                    { title: 'Broken clouds', icon: require('@/static/img/04d.svg') },
                    { title: 'Cloudly', icon: require('@/static/img/03d.svg') },
                    { title: 'Haze',  icon: require('@/static/img/50d.svg') },
                    { title: 'Mist',  icon: require('@/static/img/50d.svg') },
                    { title: 'Fog',  icon: require('@/static/img/50d.svg') }
                ],
                weatherImgNightArray: [
                    { title: 'Broken clouds', icon: require('@/static/img/04d.svg') },
                    { title: 'Cloudly', icon: require('@/static/img/03d.svg') },
                    { title: 'Haze',  icon: require('@/static/img/50d.svg') },
                    { title: 'Mist',  icon: require('@/static/img/50d.svg') },
                    { title: 'Fog',  icon: require('@/static/img/50d.svg') },
                    { title: 'Clear', icon: require('@/static/img/weather_night/01n.svg') },
                    { title: 'Clouds',  icon: require('@/static/img/weather_night/02n.svg') },
                    { title: 'Rain', icon: require('@/static/img/weather_night/10n.svg') },
                    { title: 'Shower rain', icon: require('@/static/img/weather_night/09n.svg') },
                    { title: 'Thunderstorm', icon: require('@/static/img/weather_night/11n.svg') },
                    { title: 'Snow', icon: require('@/static/img/weather_night/13n.svg') }
                ],
                time: function(val){
                    return moment.unix(val).utcOffset(this.cityWeather.timezone / 60).format("HH:mm");
                },
                date: function(){
                    return moment(new Date()).utcOffset(this.cityWeather.timezone / 60).format("DD MMMM HH:mm");
                },
                date2: function(){
                    if(moment(new Date()).utcOffset(this.cityWeather.timezone / 60).format("HH") > moment.unix(this.cityWeather.sys.sunset).utcOffset(this.cityWeather.timezone / 60).format("HH")){
                        return false;
                    }
                },
                temperature: function(val){
                    return Math.round(val - 273.15);
                },
                mostPopularCities: []
            }
        },
        computed: {
            changeCitiesInfoGetter() {
                return this.$store.getters.changeCitiesInfoGetter;
            }
        },
        methods: {
            reloadPage(city){
                axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + this.$store.state.appid).then(response => {
                    this.$store.commit('changeCities', response.data);
                }).catch(error => {
                    console.error(error);
                });
            },
            addFavorite(add, id){
                let date = moment(new Date()).format("DD.MM.YY HH:mm");

                if(this.mostPopularCities.length <= 5){
                    this.mostPopularCities.push({
                        name: add.name,
                        country: add.sys.country,
                        date: date,
                        id: add.id
                    });
                    function removeDuplicates(arr, prop) {
                        var new_arr = [];
                        var lookup  = {};

                        for (var i in arr) {
                            lookup[arr[i][prop]] = arr[i];
                        }

                        for (i in lookup) {
                            new_arr.push(lookup[i]);
                        }
                        return new_arr;
                    }

                    let uniqueArray = removeDuplicates(this.mostPopularCities, "id");
                    this.mostPopularCities = uniqueArray;

                    this.addFavorites = true;
                    this.favorite = 'Added to favorites';
                }else{
                    this.showModalErrorCity = true;
                    setTimeout(() => {
                        this.showModalErrorCity = false;
                    }, 2000);
                }

                setCookie('favoriteCities', JSON.stringify(this.mostPopularCities));
                this.$store.commit('addMostPopularCities', this.mostPopularCities)
            }
        },
        watch: {
            'changeCitiesInfoGetter': function(value) {
                this.cityWeather = value;
            }
        }
    }
</script>

<style>
    .city{
        width: 25%;
        min-height: 100vh;
        background: #69AEE0;
        padding: 22px 35px;
        position: relative;
    }
    .city h1{
        color: #fff;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 36px;
        display: flex;
    }
    .city h1 span svg{
        margin-left: 15px;
        vertical-align: bottom;
        top: -3px;
        position: relative;
        cursor: pointer;
    }
    .city h1 .favorite{
        transition: 2s all;
        transform: rotate(20deg);
    }
    .city h1 .favorites{
        stroke: #69AEE0;
    }
    .city p{
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 19px;
        margin-top: 22px;

        color: #FFFFFF;
    }
    .city p > span svg{
        position: relative;
        left: 25px;
        top: -2px;
        cursor: pointer;
    }
    .city .weatherToday{
        position: absolute;
        bottom: 10px;
        width: calc(100% - 70px);
        height: 480px;
    }
    .city .weatherToday .degrees{
        display: flex;
        justify-content: space-between;
        padding-right: 40px;
    }
    .city .weatherToday .degrees .sunny_or_cloud{
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 25px;
        color: #FFFFFF;
        margin-top: 15px;
    }
    .city .weatherToday .degrees .sunny_or_cloud .sunny_or_cloud_txt{
        margin: 20px 0 10px;
    }
    .city .weatherToday .degrees > .degrees_num{
        font-style: normal;
        font-weight: 200;
        line-height: normal;
        font-size: 110px;
        cursor: default;
        position: relative;

        color: #FFF;
    }
    .city .weatherToday .degrees > .degrees_num:after{
        content: "";
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #69AEE0;
        border: 3px solid #fff;
        position: absolute;
        top: 15px;
        right: -35px;
    }
    .city .weatherToday .weather_settings{
        background: #7FBAE5;
        color: #fff;
        border-radius: 10px;
        padding: 15px;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 22px;
    }
    .city .weatherToday .weather_settings .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .city .weatherToday .weather_settings .title:last-child{
        margin-bottom: 0;
    }
    @media screen and (max-width: 1366px) {
        .city{
            width: 35%;
        }
    }
    @media screen and (max-width: 991px) {
        .city {
            width: 50%;
        }
    }
    @media screen and (max-width: 768px) {
        .city{
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            min-height: 100vh;
        }
        .city p{
            margin-top: 0;
        }
        .city .weatherToday{
            position: absolute;
            display: flex;
            flex-direction: column;
            height: 480px;
            /*bottom: -45px;*/
        }
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        .city .weatherToday .weather_settings .title{
            margin-bottom: 0;
        }
        .city .weatherToday{
            height: 315px;
        }
        .city .weatherToday .degrees .sunny_or_cloud .sunny_or_cloud_txt {
            margin: 0;
        }
        .city .weatherToday .weather_settings{
            padding: 10px 15px;
        }
    }
    @media screen and (max-width: 670px) and (orientation: landscape) {
        .city .weatherToday{
            height: 280px;
        }
        .city .weatherToday .degrees .sunny_or_cloud .sunny_or_cloud_txt {
            display: none;
        }
    }
    @media screen and (max-width: 570px) and (orientation: landscape) {
        .city .weatherToday .degrees .sunny_or_cloud{
            margin-top: 35px;
        }
        .city .weatherToday .degrees{
            justify-content: flex-end;
        }
    }
    @media screen and (max-width: 440px) {
        .city{
            padding: 20px 25px;
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .city .weatherToday{
            display: flex;
            flex-direction: column;
            width: calc(100% - 55px);
        }
        .city .weatherToday .degrees{
            padding-right: 0;
        }
        .city .weatherToday .degrees .sunny_or_cloud{
            word-break: break-all;
        }
        .city .weatherToday .degrees > .degrees_num:after{
            display: none;
        }
    }
    @media screen and (max-width: 330px) {
        .city .weatherToday .weather_settings .title{
            margin-bottom: 15px;
        }
        .city .weatherToday{
            height: 400px;
        }
        .city .weatherToday .degrees{
            padding-top: 15px;
        }
        .city .weatherToday .degrees .sunny_or_cloud .sunny_or_cloud_txt {
            margin: 0 0 10px;
        }
    }
</style>