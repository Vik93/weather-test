import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const $store = () => new Vuex.Store({
    state: {
        mostPopularCities: {},
        cityWeatherInfo: {},
        appid: '4eb00dec3a5f50c6bde005e80b742ffc'
    },
    getters: {
        addMostFavouritesCities: state => {
            return state.mostPopularCities;
        },
        changeCitiesInfoGetter: state => {
            return state.cityWeatherInfo;
        }
    },
    mutations: {
        addMostPopularCities (state, payload) {
            state.mostPopularCities = payload;
        },
        changeCities (state, payload){
            state.cityWeatherInfo = payload;
        }
    }
});

export default $store