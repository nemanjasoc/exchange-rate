import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState()],
	state: {
		ratesObj: [
			{
			baseCurrency: '',
			date: '',
			rates: []
			}
		],
		currencies:[]
	},
	getters: {
		baseCurrency: function (state) {
			return state.ratesObj.baseCurrency;
		},
		dateOfRates: function (state) {
			return state.ratesObj.date;
		},
		rates: function (state) {
			return state.ratesObj.rates;
		},
		allCurrencyNames: function (state) {
			return state.currencies;
		}
	},
	mutations: {
		setRatesObj: function(state, payload) {
			console.log("payload prosledjeno: ", payload)
			state.ratesObj = payload;
		},
		setAllCurrencyNames: function (state, payload) {
			console.log("prosledjeni payload u setAllCurrencyNames: ", payload)
			state.currencies = payload;
		}
	}
});
