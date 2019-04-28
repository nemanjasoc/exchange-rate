import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		baseCurrency: '',
		date:  '',
		rates: []	
	},
	getters: {
		baseCurrency: function (state) {
			return state.baseCurrency;
		},
		dateOfRates: function (state) {
			return state.date;
		},
		rates: function (state) {
			return state.rates;
		}
	}
});
