<template>
	<div class="currency-converter-page">
		<div class="exchange-rates"> 
			<router-link to="/exchange-rates"><a>Exchange Rates</a></router-link>
		</div>
		<h1>Currency Converter</h1>
		<div class="currency-wrapper">
			<div class="inputs">
				<div class="amount">
					<label>Amount</label>
					<input type="text" value="1" v-model="amount">
				</div>
				<div class="from">
					<label>From</label>
					<select v-if="show">
						<option v-for="currencyName in allCurrencyNames" value='currencyName'>{{ currencyName }}</option>
					</select>
					<select v-else>
						<option value='baseCurrency'>{{ baseCurrency }}</option>
					</select>
				</div>
				<div class="switch" @click="show = !show"><i class="fas fa-exchange-alt"></i></div>
				<div class="to">
					<label>To</label>
					<select v-if="show">
						<option value='baseCurrency'>{{ baseCurrency }}</option>
					</select>
					<select v-else>
						<option v-for="currencyName in allCurrencyNames" value='currencyName'>{{ currencyName }}</option>
					</select>
				</div>
				<button type="button" class="send"><i class="fas fa-angle-right"></i></button>
			</div>
			<div class="result">
				<div class="amount-from">Amount from = </div>
				<div class="result-to">Result to</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters([
			'allCurrencyNames',
			'baseCurrency'
		])
	},
	data() {
		return {
			amount: '1',
			show: true
		}
	},
	mounted() {
		this.$http.get(`http://data.fixer.io/api/latest?access_key=74a5598978663ad685c92efa8f446b8e`)
			.then(response => {
			return response.json();
		})
		.then(data => {
			var allCurrencyNames = [];
			for (let property in data.rates) {
				allCurrencyNames.push(property);
			}
			console.log('allCurrencyNames: ', allCurrencyNames)
			this.$store.commit('setAllCurrencyNames', allCurrencyNames);
      	});
	}
}
</script>

<style scoped>
	.currency-converter-page {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}

	.exchange-rates {
		padding-top: 50px;
	}

	.exchange-rates a {
		font-size: 20px;
		font-weight: 600;
		color: #888;
		position: relative;
		text-decoration: none;
	}

	.exchange-rates a:hover {
		color: white;
	}

	.exchange-rates a:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		top: 20px;
		bottom: 0;
		left: 0;
		background-color: white;
		visibility: hidden;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
	}

	.exchange-rates a:hover:before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}

	h1 {
		color: white;
	}

	.currency-wrapper {
		max-width: 800px;
		width: 100%;
		background-color: #282537;
		opacity: 0.9;
		border-radius: 15px;
		overflow: hidden;
		margin: 0 auto;
	}


	.inputs {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding-top: 50px;
	}

	.amount {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding-right: 15px;
	}

	label {
		display: flex;
		color: white;
		font-size: 17px;
		margin-bottom: 5px;
	}

	input[type=text] {
		max-width: 250px;
		width: 100%;
		height: 42px;
		border-radius: 10px;
		font-size: 30px;
		padding-left: 10px;
	}

	.from {
		
	}

	.to {
		padding-right: 15px;
	}

	select {
		max-width: 250px;
		width: 100%;
		height: 50px;
		border-radius: 10px;
		font-size: 30px;
		padding: 0px 10px;
		cursor: pointer;
	}

	.switch {
		font-size: 25px;
		cursor: pointer;
		color: white;
		width: 50px;
		height: 50px;
		margin-top: 23px;
		text-align: center;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.switch:active {
		cursor: pointer;
		width: 50px;
		height: 50px;
		border: 1px solid #2196f3;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
	}

	.send {
		font-size: 30px;
		width: 50px;
		height: 50px;
		border-radius: 10px;
		cursor: pointer;
		background-color: #fbbf08;
		color: blue;
		font-weight: 600;
		margin-top: 23px;
	}

	.send:active {
		background-color: #2196f3;
		color: white;
		cursor: pointer;
	}

	.result {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 50px 0px;
	}

	.amount-from {
		color: white;
		font-size: 30px;
	}

	.result-to {
		color: white;
		font-size: 50px;
	}
</style>
