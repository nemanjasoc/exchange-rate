import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
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
			state.ratesObj.date = payload.newDate;
			state.ratesObj = payload.ratesObj;
		}
	}
});
