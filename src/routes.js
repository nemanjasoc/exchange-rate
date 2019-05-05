import ExchangeRates from './components/ExchangeRates.vue';
import CurrencyConverter from './components/CurrencyConverter.vue';

export const routes = [
	{
		path: '/exchange-rates',
		component: ExchangeRates
	},
	{
		path: '/currency-converter',
		component: CurrencyConverter
	},
	{
		path: '*',
		redirect: '/exchange-rates'
	}
];
