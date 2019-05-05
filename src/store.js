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
		]
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
		}
	},
	mutations: {
		setRatesObj: function(state, payload) {
			console.log("payload prosledjeno: ", payload)
			state.ratesObj = payload;
		}
	}
});
