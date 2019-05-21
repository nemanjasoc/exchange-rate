import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState()],
	state: {
		ratesObj: {
			baseCurrency: '',
			date: '',
			rates: []
		},
		allRates:[
			{
			currency: '',
			value: ''
			}
		]
	},
	getters: {
		baseCurrency: function (state) {
			return state.ratesObj.baseCurrency;
		},
		dateOfRates: function (state) {
			return state.ratesObj.date;
		},
		randomRates: function (state) {
			return state.ratesObj.rates;
		},
		allRates: function (state) {
			return state.allRates;
		}
	},
	mutations: {
		setAllRates: function (state, payload) {
			state.allRates = payload;
		},
		setRandomRatesObj: function(state, payload) {
			state.ratesObj = payload;
		}
	}
});
