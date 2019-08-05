<template>
    <div>
        <section class="container" v-show="load">
            <CityComponent/>
            <!--<nuxt/>-->
            <InfoCityComponent/>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import store from '../store/index.js';
import CityComponent from "~/components/CityComponent.vue";
import InfoCityComponent from "~/components/InfoCityComponent.vue";

export default{
    head(){
        return{
            title: 'Weather test app'
        }
    },
    data() {
        return {
            load: false,
            previouslyViewed: 'Paris',
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
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${this.$store.state.appid}`).then(response => {
                        this.cityWeather = response.data;
                        let vm = this;
                        this.load = true;
                        this.$store.commit('changeCities', response.data);

                        if(getCookie('favoriteCities') == undefined){
                            this.addFavorites = false;
                            this.favorite = 'Add to favorites';
                        }else{
                            this.mostPopularCities = JSON.parse(getCookie('favoriteCities'));
                            this.mostPopularCities.forEach(function(nval){
                                if(vm.cityWeather.id == nval.id){
                                    vm.addFavorites = true;
                                    vm.favorite = 'Added to favorites';
                                }
                            });
                        }
                        if(getCookie('city') == undefined){
                            this.viewedCity = false;
                        }else{
                            this.previouslyViewed = getCookie('city').split(',');
                            this.viewedCity = true;
                        }
                        this.$nextTick(() => {
                            this.$nuxt.$loading.finish();
                        });
                    }).catch(error => {
                        console.error(error);
                    });
                },
                error => {
                    alert(error.message);
                    if(getCookie('city') != undefined && getCookie('city').split(',').length > 0){
                        this.previouslyViewed = getCookie('city').split(',');
                        this.viewedCity = true;
                        this.previouslyViewed = this.previouslyViewed[this.previouslyViewed.length - 1];
                    }
                    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.previouslyViewed + '&appid=' + this.$store.state.appid).then(response => {
                        this.cityWeather = response.data;
                        let vm = this;
                        this.load = true;
                        this.$store.commit('changeCities', response.data);

                        if(getCookie('favoriteCities') == undefined){
                            this.addFavorites = false;
                            this.favorite = 'Add to favorites';
                        }else{
                            this.mostPopularCities = JSON.parse(getCookie('favoriteCities'));
                            this.mostPopularCities.forEach(function(nval){
                                if(vm.cityWeather.id == nval.id){
                                    vm.addFavorites = true;
                                    vm.favorite = 'Added to favorites';
                                }
                            });
                        }
                        if(getCookie('city') == undefined){
                            this.viewedCity = false;
                        }else{
                            this.previouslyViewed = getCookie('city').split(',');
                            this.viewedCity = true;
                        }
                        this.$nextTick(() => {
                            this.$nuxt.$loading.finish();
                        });
                    }).catch(error => {
                        console.error(error);
                    });
                }, {
                    maximumAge: 5 * 60 * 1000,
                    timeout: 10 * 1000,
                    enableHighAccuracy: true
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    },
    components: {
        CityComponent,
        InfoCityComponent
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
html, body{
  font-family: 'Montserrat', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
h2{
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 30px;
  width: 100%;
  margin-bottom: 25px;

  color: #000000;
}
h4{
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 17px;
  text-align: center;

  color: #000000;
}
.container {
  display: flex;
  max-width: 100%!important;
  padding: 0!important;
}
@media screen and (max-width: 768px) {
    .container{
        flex-direction: column;
    }
}
</style>

